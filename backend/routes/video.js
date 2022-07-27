import prisma from "../prisma.js";
import express from "express";
import { getAuthUser, protect } from "../middleware/auth.js";
import fetch from "node-fetch";

const TMDB_API_URL = "https://api.themoviedb.org/3/";
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_POPULAR_BASE_URL = `${TMDB_API_URL}movie/popular?api_key=${TMDB_API_KEY}`;

const getVideoRoutes = () => {
  const router = express.Router();

  router.get("/", getRecommendedVideos);
  router.post("/", protect, addVideo);

  router.get("/trending", getTrendingVideos);
  router.get("/search", searchVideos);
  router.get("/tmdb/", fetchTmdbVideos);
  router.get("/tmdb/:id", fetchTmdbVideo);

  return router;
};

export async function getVideoViews(videos) {
  for (const video of videos) {
    const views = await prisma.view.count({
      where: {
        videoId: {
          equals: video.id,
        },
      },
    });
    video.views = views;
  }
  return videos;
}

export async function fetchTmdbVideos(req, res) {
  const { page, genre } = req.query;

  if (!page || !genre) {
    res.status(400).json({ error: true, msg: "params missing" });
  }

  if (genre === "popular") {
    const endpoint = `${TMDB_POPULAR_BASE_URL}&page=${page}`;
    const popularData = await (await fetch(endpoint)).json();

    res.status(200).json({ data: popularData });
  } else {
    const endpoint = `${TMDB_API_URL}discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genre}&page=${page}`;
    const genreData = await (await fetch(endpoint)).json();
    res.status(200).json({ data: genreData });
  }
}

export async function fetchTmdbVideo(req, res) {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ error: true, msg: "id missing" });
  }

  const endpoint = `${TMDB_API_URL}movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=videos,images`;
  const data = await (await fetch(endpoint)).json();
  res.status(200).json({ data });
}

async function getRecommendedVideos(req, res) {
  let videos = await prisma.video.findMany({
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!videos.length) {
    return res.status(200).json({ videos });
  }

  videos = await getVideoViews(videos);

  res.status(200).json({ videos });
}

async function getTrendingVideos(req, res) {
  let videos = await prisma.video.findMany({
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!videos.length) {
    return res.status(200).json({ videos });
  }

  videos = await getVideoViews(videos);
  videos.sort((a, b) => b.views - a.views);

  res.status(200).json({ videos });
}

async function searchVideos(req, res, next) {
  if (!req.query.query) {
    return next({
      message: "Please enter a search query",
      statusCode: 400,
    });
  }

  let videos = await prisma.video.findMany({
    include: {
      user: true,
    },
    where: {
      OR: [
        {
          title: {
            contains: req.query.query,
            mode: "insensitive",
          },
        },
        {
          overview: {
            contains: req.query.query,
            mode: "insensitive",
          },
        },
      ],
    },
  });

  if (!videos.length) {
    return res.status(200).json({ videos });
  }

  videos = await getVideoViews(videos);

  res.status(200).json({ videos });
}

async function addVideo(req, res) {
  const { title, overview, url, thumbnail } = req.body;

  const video = await prisma.video.create({
    data: {
      title,
      overview,
      url,
      thumbnail,
      user: {
        connect: {
          id: req.user.id,
        },
      },
    },
  });

  res.status(200).json({ video });
}

export { getVideoRoutes };

import React, { useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { VideosWrapper, Wrapper } from "../styles/Videos";
import { fetchMovies } from "../utils/tmdb";
import loaderSvg from "../assets/loader.svg";
import { VideoCard } from "../components";

const Videos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries(new URLSearchParams(searchParams));
  const selectedGenre = useRef(params.genre ? params.genre : "popular");

  const { data, isFetching, refetch } = useQuery(
    `movies`,
    () => fetchMovies(selectedGenre.current),
    {
      staleTime: Infinity,
    }
  );

  useEffect(() => {
    if (params.genre) {
      selectedGenre.current = params.genre;
      refetch();
    } else {
      selectedGenre.current = "popular";
    }
  }, [params.genre, refetch, searchParams]);

  const handleGenreClick = (genre) => {
    setSearchParams({ genre });
  };

  return (
    <>
      <Wrapper>
        <span
          onClick={() => handleGenreClick("popular")}
          className={selectedGenre.current === "popular" ? "selected" : ""}
        >
          Popular
        </span>
        <span
          onClick={() => handleGenreClick("28")}
          className={selectedGenre.current === "28" ? "selected" : ""}
        >
          Action
        </span>
        <span
          onClick={() => handleGenreClick("35")}
          className={selectedGenre.current === "35" ? "selected" : ""}
        >
          Comedy
        </span>
        <span
          onClick={() => handleGenreClick("27")}
          className={selectedGenre.current === "27" ? "selected" : ""}
        >
          Horror
        </span>
        <span
          onClick={() => handleGenreClick("10749")}
          className={selectedGenre.current === "10749" ? "selected" : ""}
        >
          Romance
        </span>
        <span
          onClick={() => handleGenreClick("878")}
          className={selectedGenre.current === "878" ? "selected" : ""}
        >
          Sci Fi
        </span>
        <span
          onClick={() => handleGenreClick("9648")}
          className={selectedGenre.current === "9648" ? "selected" : ""}
        >
          Mystery
        </span>
      </Wrapper>
      <VideosWrapper>
        {!isFetching && (
          <>
            {data &&
              data.results.map((movie, i) => (
                <React.Fragment key={i}>
                  <VideoCard key={movie.id} details={movie} page="videos" />
                </React.Fragment>
              ))}
          </>
        )}
        {isFetching && <img src={loaderSvg} alt="Loading..." />}
      </VideosWrapper>
    </>
  );
};

export default Videos;

import React, { useEffect, useRef } from "react";
import { useInfiniteQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";
import { VideosWrapper, Wrapper } from "../styles/Videos";
import loaderSvg from "../assets/loader.svg";
import { VideoCard } from "../components";
import { fetchMovies } from "../utils/api-client";

const Videos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries(new URLSearchParams(searchParams));
  const selectedGenre = useRef(params.genre ? params.genre : "popular");

  const { data, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery(
    `movies`,
    ({ pageParam }) => fetchMovies(selectedGenre.current, pageParam),
    {
      staleTime: Infinity,
      getNextPageParam: (lastPage) => {
        if (lastPage.page === 8) return undefined;
        return lastPage.page + 1;
      },
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
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchNextPage}
        hasMore={hasNextPage}
        loader={
          <div>
            <img
              className="loaderImg"
              key={Date.now()}
              src={loaderSvg}
              alt="loading..."
            />
          </div>
        }
        // useWindow={false}
        threshold={50}
      >
        <VideosWrapper>
          {data &&
            data.pages.map((page, i) => (
              <React.Fragment key={i}>
                {page.results.map((movie) => (
                  <VideoCard key={movie.id} details={movie} page="videos" />
                ))}
              </React.Fragment>
            ))}
        </VideosWrapper>
      </InfiniteScroll>
    </>
  );
};

export default Videos;

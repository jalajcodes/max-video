import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { VideosWrapper } from "../styles/Videos";
import { fetchSearchResults } from "../utils/tmdb";
import loaderSvg from "../assets/loader.svg";
import { ErrorMessage, VideoCard } from "../components";
import React from "react";
import Wrapper from "../styles/SearchResults";

const SearchResults = () => {
  const { searchQuery } = useParams();

  const { data, error, isFetching, isError } = useQuery(
    `searchResults_${searchQuery}`,
    () => fetchSearchResults(searchQuery),
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <Wrapper>
      <h1>Results for "{searchQuery}"</h1>
      <VideosWrapper>
        {!isFetching && !isError && (
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
    </Wrapper>
  );
};

export default SearchResults;

import { useQuery } from "react-query";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { DislikeIcon, LikeIcon } from "../components/Icons";
import Button from "../styles/Button";
import Skeleton from "../skeletons/WatchVideoSkeleton";
import Wrapper from "../styles/WatchVideo";
import { formatCreatedAt } from "../utils/date";
import { NoResults, VideoCard } from "../components";
import { fetchMovie, fetchMovies } from "../utils/tmdb";
import { shuffle } from "../utils/shuffle";

function WatchVideo() {
  const { videoId } = useParams();
  const { data: video, isLoading: isLoadingVideo } = useQuery(
    ["WatchVideo", videoId],
    () => fetchMovie(videoId),
    { refetchOnWindowFocus: false }
  );
  const { data: next, isLoading: isLoadingNext } = useQuery(
    ["WatchVideo", "Up Next"],
    () => fetchMovies("35"),
    { refetchOnWindowFocus: false }
  );

  const getVideoUrl = (video) => {
    const trailer = video.videos.results.find((v) => {
      return v.type === "Trailer";
    });
    return `https://www.youtube.com/embed/${trailer.key}`;
  };

  if (isLoadingVideo) {
    return <Skeleton />;
  }
  if (!isLoadingVideo && !video) {
    return (
      <NoResults
        title="Page not found"
        text="The page you are looking for is not found or it may have been removed"
      />
    );
  }

  return (
    <Wrapper
      filledLike={video && video.isLiked}
      filledDislike={video && video.isDisliked}
    >
      <div className="video-container">
        <div className="video">
          {!isLoadingVideo && (
            <iframe
              width="100%"
              height="400"
              src={getVideoUrl(video)}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          )}
        </div>

        <div className="video-info">
          <h3>{video.title}</h3>

          <div className="video-info-stats">
            <p>
              <span>65 views</span> <span>•</span>{" "}
              <span>Premiered {formatCreatedAt(video.release_date)}</span>
            </p>

            <div className="likes-dislikes flex-row">
              <p className="flex-row like">
                <LikeIcon /> <span>{video.likesCount}</span>
              </p>
              <p className="flex-row dislike" style={{ marginLeft: "1rem" }}>
                <DislikeIcon /> <span>{video.dislikesCount}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="channel-info-description">
          <div className="channel-info-flex">
            <div className="channel-info flex-row">
              <img
                className="avatar md"
                src="https://picsum.photos/200"
                alt={`avatar`}
              />
              <div className="channel-info-meta">
                <h4>
                  <Link to={`/channel/jalaj/}`}>Youtube</Link>
                </h4>
              </div>
            </div>

            <Button>Add to Watchlist</Button>
            <Button>Add to Playlist</Button>
          </div>

          <p>{video.description}</p>
        </div>
      </div>

      <div className="related-videos">
        <h3 className="up-next">Up Next</h3>
        {!isLoadingNext &&
          shuffle(next.results)
            .filter((v) => v.id !== video.id)
            .slice(0, 2)

            .map((video) => (
              <VideoCard key={video.id} hideAvatar details={video} />
            ))}
      </div>
    </Wrapper>
  );
}

export default WatchVideo;

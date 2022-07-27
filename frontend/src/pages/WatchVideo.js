import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { DislikeIcon, LikeIcon } from "../components/Icons";
import Skeleton from "../skeletons/WatchVideoSkeleton";
import Wrapper from "../styles/WatchVideo";
import { formatCreatedAt } from "../utils/date";
import { NoResults, VideoCard } from "../components";
import { getVideoUrl } from "../utils/tmdb";
import { useHistory } from "../context/historyContext";
import { useEffect, useState } from "react";
import { Button } from "../styles/Button";
import { useModal } from "../context/modalContext";
import { useLikes } from "../context/likesContext";
import { useWatchLater } from "../context/watchLaterContext";
import { fetchMovie, fetchMovies } from "../utils/api-client";

function WatchVideo() {
  const { addToHistory } = useHistory();
  const { toggleModal } = useModal();
  const { getVideoStatus, addToLikes, removeFromLikes } = useLikes();
  const { videoId } = useParams();
  const { addToWatchLater, videoInWatchLater, deleteFromWatchLater } =
    useWatchLater();

  const [isInWatchLater, setIsInWatchLater] = useState(false);

  const { data: video, isLoading: isLoadingVideo } = useQuery(
    ["WatchVideo", videoId],
    () => fetchMovie(videoId),
    { refetchOnWindowFocus: false, staleTime: Infinity }
  );
  const { data: next, isLoading: isLoadingNext } = useQuery(
    ["WatchVideo", "Up Next"],
    () => fetchMovies("35"),
    { refetchOnWindowFocus: false, staleTime: Infinity }
  );

  useEffect(() => {
    if (video) {
      addToHistory(video);
      setIsInWatchLater(videoInWatchLater(video.id));
    }
  }, [video, addToHistory, videoInWatchLater]);

  const handleIconClick = (action) => {
    const [liked, disliked] = getVideoStatus(video.id);

    if (action === "like") {
      if (liked) {
        return removeFromLikes(video, "like");
      } else if (disliked) {
        return;
      }

      return addToLikes(video, "like");
    }

    if (action === "dislike") {
      if (disliked) {
        return removeFromLikes(video, "dislike");
      } else if (liked) {
        return;
      }

      return addToLikes(video, "dislike");
    }
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
      filledLike={video && getVideoStatus(video.id)[0]}
      filledDislike={video && getVideoStatus(video.id)[1]}
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
              <p
                className="flex-row like"
                onClick={() => handleIconClick("like")}
              >
                <LikeIcon />
              </p>
              <p
                className="flex-row dislike"
                onClick={() => handleIconClick("dislike")}
              >
                <DislikeIcon />
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

            {isInWatchLater ? (
              <Button onClick={() => deleteFromWatchLater(video.id)}>
                Remove from Watch Later
              </Button>
            ) : (
              <Button onClick={() => addToWatchLater(video)}>
                Add to Watch Later
              </Button>
            )}
            <Button onClick={() => toggleModal(video)}>Add to Playlist</Button>
          </div>

          <p>{video.description}</p>
        </div>
      </div>

      <div className="related-videos">
        <h3 className="up-next">Up Next</h3>
        {!isLoadingNext &&
          next.results
            .filter((v) => v.id !== video.id)
            .slice(0, 2)

            .map((video) => (
              <VideoCard
                key={video.id}
                hideAvatar
                details={video}
                page="watchvideo"
              />
            ))}
      </div>
    </Wrapper>
  );
}

export default WatchVideo;

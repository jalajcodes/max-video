import React from "react";
import { VideoCard } from "../components";
import { LibIcon } from "../components/Icons";
import SignUpCard from "../components/SignupCard";
import { useWatchLater } from "../context/watchLaterContext";
import { ButtonGhost } from "../styles/Button";
import Wrapper from "../styles/Playlists";

const LikedVideos = () => {
  const { watchLaterData, deleteWatchLater } = useWatchLater();
  return watchLaterData.length === 0 ? (
    <SignUpCard
      icon={<LibIcon />}
      title="Enjoy your favorite videos"
      description="Sign in to access videos that you’ve liked or saved"
    />
  ) : (
    <Wrapper>
      <h1>
        <span>Watch Later</span>{" "}
        <ButtonGhost onClick={deleteWatchLater}>Delete ALL</ButtonGhost>
      </h1>
      <div className="liked-container">
        {watchLaterData.reverse().map((video) => (
          <VideoCard key={video.id} details={video} page="watchLater" />
        ))}
      </div>
    </Wrapper>
  );
};

export default LikedVideos;

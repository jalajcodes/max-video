import React from "react";
import { VideoCard } from "../components";
import { ChannelIcon } from "../components/Icons";
import SignUpCard from "../components/SignupCard";
import { useLikes } from "../context/likesContext";
import { ButtonGhost } from "../styles/Button";
import Wrapper from "../styles/Playlists";

const LikedVideos = () => {
  const { likesData, removeAllLikes } = useLikes();
  return likesData.length === 0 ? (
    <SignUpCard
      icon={<ChannelIcon />}
      title="Save everything you like"
      description="Videos that you have liked will show up here"
    />
  ) : (
    <Wrapper>
      <h1>
        <span>Liked Videos</span>{" "}
        <ButtonGhost onClick={() => removeAllLikes("like")}>
          Delete ALL
        </ButtonGhost>
      </h1>
      <div className="liked-container">
        {likesData.reverse().map((likedVideo) => (
          <VideoCard
            key={likedVideo.id}
            details={likedVideo}
            page="likedVideos"
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default LikedVideos;

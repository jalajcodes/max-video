import React from "react";
import { ChannelIcon } from "../components/Icons";
import SignUpCard from "../components/SignupCard";

const LikedVideos = () => {
  return (
    <SignUpCard
      icon={<ChannelIcon />}
      title="Save everything you like"
      description="Videos that you have liked will show up here"
    />
  );
};

export default LikedVideos;

import React from "react";
import { TrendingIcon } from "../components/Icons";
import SignUpCard from "../components/SignupCard";

const Trending = () => {
  return (
    <SignUpCard
      icon={<TrendingIcon />}
      title="What others are watching"
      description="Sign in to see what others are watching"
    />
  );
};

export default Trending;

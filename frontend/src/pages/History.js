import React from "react";
import { HistoryIcon } from "../components/Icons";
import SignUpCard from "../components/SignupCard";

const History = () => {
  return (
    <SignUpCard
      icon={<HistoryIcon />}
      title="Keep track of what you watch"
      description="Watch history isn't viewable when signed out"
    />
  );
};

export default History;

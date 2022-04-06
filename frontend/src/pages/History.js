import React from "react";
import { VideoCard } from "../components";
import { HistoryIcon } from "../components/Icons";
import SignUpCard from "../components/SignupCard";
import { useHistory } from "../context/historyContext";
import { ButtonGhost } from "../styles/Button";
import Wrapper from "../styles/History";

const History = () => {
  const { historyData, deleteHistory } = useHistory();

  return historyData.length === 0 ? (
    <SignUpCard
      icon={<HistoryIcon />}
      title="Keep track of what you watch"
      description="Watch history isn't viewable when signed out"
    />
  ) : (
    <Wrapper>
      <h1>
        <span>History</span>{" "}
        <ButtonGhost onClick={deleteHistory}>Clear ALL</ButtonGhost>
      </h1>
      <div className="history-container">
        {historyData.reverse().map((video) => (
          <VideoCard key={video.id} details={video} page="history" />
        ))}
      </div>
    </Wrapper>
  );
};

export default History;

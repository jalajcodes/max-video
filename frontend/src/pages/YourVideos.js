import { VidIcon } from "../components/Icons";
import SignUpCard from "../components/SignupCard";

const YourVideos = () => {
  return (
    <SignUpCard
      icon={<VidIcon />}
      title="Manage your videos"
      description="Sign in to upload and manage your videos, pre-recorded or live"
    />
  );
};

export default YourVideos;

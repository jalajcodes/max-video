import { LibIcon } from "../components/Icons";
import SignUpCard from "../components/SignupCard";

function Library() {
  return (
    <SignUpCard
      icon={<LibIcon />}
      title="Enjoy your favorite videos"
      description="Sign in to access videos that you’ve liked or saved"
    />
  );
}

export default Library;

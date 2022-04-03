import { Link } from "react-router-dom";
import { VideoCard } from "../components";
import Wrapper from "../styles/Home";

const Home = () => {
  return (
    <Wrapper>
      <h1>Home</h1>
      <h2>Categories</h2>
      <div className="category">
        <Link to="/feed/videos?genre=35" className="category-card">
          <span>Comedy</span>
        </Link>
        <Link to="/feed/videos?genre=28">
          <div className="category-card">
            <span>Action</span>
          </div>
        </Link>
        <Link to="/feed/videos?genre=27">
          <div className="category-card">
            <span>Horror</span>
          </div>
        </Link>
        <Link to="/feed/videos?genre=10749">
          <div className="category-card">
            <span>Romance</span>
          </div>
        </Link>
        <Link to="/feed/videos?genre=878">
          <div className="category-card">
            <span>Sci Fi</span>
          </div>
        </Link>
        <Link to="/feed/videos?genre=9648">
          <div className="category-card">
            <span>Mystery</span>
          </div>
        </Link>
      </div>
      <h2>Recommended Videos</h2>
      <VideoCard
        details={{
          overview:
            "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
          poster_path: "/1j6JtMRAhdO3RaXRtiWdPL5D3SW.jpg",
          title: "Sonic the Hedgehog 2",
          id: 675353,
        }}
      />
    </Wrapper>
  );
};

export default Home;

import { Link } from "react-router-dom";
import { VideoCard } from "../components";
import Wrapper from "../styles/Home";
import { categories } from "../utils/categories";

const Home = () => {
  return (
    <Wrapper>
      <h1>Home</h1>
      <h2>Categories</h2>
      <div className="category">
        {categories.map((category) => (
          <Link
            to={`/feed/videos?genre=${category.id}`}
            className="category-card"
          >
            <span>{category.name}</span>
          </Link>
        ))}
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

import { useNavigate } from "react-router-dom";
import Wrapper from "../styles/Search";
import { SearchIcon } from "./Icons";

function Search() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const searchQuery = event.target.elements.search.value;

    if (!searchQuery.trim()) return;

    navigate(`/results/${searchQuery}`);
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input id="search" type="text" placeholder="Search" />
        <button aria-label="Search videos" type="submit">
          <SearchIcon />
        </button>
      </form>
    </Wrapper>
  );
}

export default Search;

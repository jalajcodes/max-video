import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1.3rem 3rem;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 7rem;

  h1 {
    margin-bottom: 1rem;
    span {
      margin-right: 1rem;
    }

    @media screen and (max-width: 930px) {
      text-align: center;
    }
  }

  .playlists-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    @media screen and (max-width: 930px) {
      justify-content: center;
    }

    h2 {
      display: flex;
      align-items: center;
      background-color: ${(props) => props.theme.grey};
      border-radius: 1rem;
      padding: 0.4rem 2rem;
      width: fit-content;
      margin-bottom: 1rem;
      border: 1px solid ${(props) => props.theme.darkGrey};
      cursor: pointer;

      svg {
        margin-left: 1rem;
      }
    }

    .playlist-videos {
      display: flex;
    }
  }
`;

export default Wrapper;

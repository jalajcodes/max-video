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

  .history-container {
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 930px) {
      justify-content: center;
    }
  }
`;

export default Wrapper;

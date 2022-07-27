import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1.3rem;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 7rem;

  h2 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .category {
    display: flex;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }

  .category-card {
    display: flex;
    background-color: ${(props) => props.theme.grey};
    border-radius: 1rem;
    padding: 1rem;
    margin-right: 1rem;
    border: 1px solid ${(props) => props.theme.darkGrey};
    cursor: pointer;
    transition: all 0.1s;

    @media (max-width: 768px) {
      flex: 1 1;
    }

    &:hover {
      background-color: ${(props) => props.theme.darkGrey};
      transform: translateY(0.4rem);
    }
  }
`;

export default Wrapper;

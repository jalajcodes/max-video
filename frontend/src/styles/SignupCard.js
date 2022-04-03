import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 10rem;

  div {
    margin: 1rem auto;
    text-align: center;
  }

  svg {
    height: 10rem;
    width: 10rem;
  }
`;

export default Wrapper;

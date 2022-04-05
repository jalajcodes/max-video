import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 5.5rem auto auto auto;
  span {
    font-size: 0.8rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.primaryColor};
    padding: 0.5rem 1.5rem;
    margin-right: 1rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
    transition: all 0.3s ease-out;
    cursor: pointer;

    &:hover,
    &.selected {
      background-color: ${(props) => props.theme.primaryColor};
    }
  }
`;

const VideosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export { Wrapper, VideosWrapper };

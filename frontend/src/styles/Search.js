import styled from "styled-components";

const Wrapper = styled.div`
  input#search {
    background: ${(props) => props.theme.black};
    padding: 0.4rem 1rem;
    border: 1px solid ${(props) => props.theme.darkGrey};
    border-radius: 8px;
    height: 2.5rem;
    color: ${(props) => props.theme.fontColor};

    &:focus {
      outline: 1px solid ${(props) => props.theme.primaryColor};
    }
  }

  form {
    display: flex;
    position: relative;
  }

  button {
    width: 3rem;
    background-color: transparent;
    border-radius: 0 2px 2px 0;
    position: absolute;
    right: 0;
    top: 0.5rem;
    border: none;
  }

  button svg {
    pointer-events: none;
    display: block;
    width: 100%;
    height: 24px;
    color: fff;
    opacity: 0.6;
  }

  @media screen and (max-width: 750px) {
    input#search,
    button {
      display: none;
    }
  }
`;

export default Wrapper;

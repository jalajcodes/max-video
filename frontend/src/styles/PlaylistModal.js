import styled, { keyframes } from "styled-components";

export const openModal = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 900;
  display: ${(props) => (props.showModal ? "grid" : "none")};
  place-items: center;
  background: rgba(0, 0, 0, 0.7);
  animation: ${openModal} 0.2s ease-in-out;

  .create-playlist,
  .auth-wrapper {
    width: 30rem;
    padding: 1rem;
    border-radius: 4px;
    background: ${(props) => props.theme.grey};
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.4), 0px 0px 4px rgba(0, 0, 0, 0.25);
    position: relative;
  }

  .hide {
    display: none;
  }

  .auth-wrapper {
    width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      align-self: center;
      margin: 0.3rem;
    }

    .modal-header h3 {
      display: block;

      svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
      }
    }
  }

  div.modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 0rem 1rem 0rem;
  }

  h3 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  form {
    padding: 1rem;
  }

  input {
    width: 100%;
    background: ${(props) => props.theme.black};
    border: 1px solid ${(props) => props.theme.black};
    margin-bottom: 1rem;
    padding: 0.6rem 1rem;
    border-radius: 3px;
    color: ${(props) => props.theme.fontColor};
    transition: border 0.2s;

    &:focus {
      border: 1px solid ${(props) => props.theme.primaryColor};
    }
  }

  .playlists {
    margin: 1rem;

    input {
      margin-bottom: 0;
      margin-right: 0.5rem;
      width: 1rem;
      height: 1rem;
    }

    ul {
      list-style: none;
    }
    li {
      display: flex;
    }
    label {
      align-items: center;
      display: flex;
    }
  }

  svg {
    fill: ${(props) => props.theme.primaryColor};
    height: 22px;
    width: 22px;
    position: relative;
    top: -1px;
  }

  @media screen and (max-width: 600px) {
    .create-playlist {
      width: 90%;
      margin: 4rem auto;
    }
  }

  @media screen and (max-width: 400px) {
    background: rgba(0, 0, 0, 0.9);
  }
`;

export default Wrapper;

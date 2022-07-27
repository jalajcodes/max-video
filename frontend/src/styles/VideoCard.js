import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.grey};
  width: 20rem;
  height: 25rem;
  margin: 0 1rem 1rem 0;

  .video-image {
    position: relative;
    border-radius: 1rem 1rem 0 0;
    display: block;
    overflow: hidden;
    height: 100%;
    transition: all 0.3s ease-in-out;

    &:hover img {
      transform: scale(1.3);
      filter: brightness(0.6);
    }

    &:hover .image-overlay {
      visibility: visible;
      opacity: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease-out;
    }

    .image-overlay {
      position: absolute;
      z-index: 10;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      visibility: hidden;
      opacity: 0;
      transition: all 0.3s ease-out;

      span {
        margin-right: 1rem;
        cursor: pointer;

        svg {
          fill: ${(props) => props.theme.fontColor};
          width: 2.5rem;
          height: 2.5rem;
        }
      }
    }
  }

  .video-details {
    flex: 1;
    padding: 10px;
    position: relative;

    h3 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    p {
      font-size: 0.8rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  .video-menu {
    position: absolute;
    top: 1rem;
    right: 2rem;
    padding: 0.5rem 0;
    background-color: ${(props) => props.theme.darkGrey};
    border-radius: 5px;
    z-index: 100;

    ul {
      list-style: none;
      li {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 0.3rem 0.6rem;

        &:hover {
          background-color: ${(props) => props.theme.grey};
        }

        svg {
          margin-right: 0.5rem;
        }
      }
    }
  }
`;

export default Wrapper;

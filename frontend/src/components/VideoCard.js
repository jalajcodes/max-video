import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useClickOutside from "../hooks/useClickOutside";
import Wrapper from "../styles/VideoCard";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../utils/tmdb";
import { DislikeIcon, LikeIcon, MenuIcon, SubIcon } from "./Icons";

const VideoCard = ({ details }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useClickOutside(ref, () => setIsOpen(false));

  return (
    <Wrapper>
      <Link to={`/watch/${details.id}`} replace="true" className="video-image">
        <div className="image-overlay">
          <span>
            <LikeIcon />
          </span>
        </div>
        <img
          src={`${IMAGE_BASE_URL}${POSTER_SIZE}${details.poster_path}`}
          alt={details.title}
        />
      </Link>
      <div className="video-details">
        <h3>
          <Link to={`/watch/${details.id}`}>{details.title} </Link>
          <MenuIcon onClick={() => setIsOpen((prev) => !prev)} />{" "}
        </h3>
        <p>{details.overview}</p>
        {isOpen && (
          <div className="video-menu" ref={ref}>
            <ul>
              <li>
                <SubIcon /> Add to Playlist
              </li>
              <li>
                <SubIcon /> Save to watch later
              </li>
            </ul>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default VideoCard;

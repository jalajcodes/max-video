import { Menu, MenuButton, MenuItem, MenuList } from "@reach/menu-button";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLikes } from "../context/likesContext";
import { useMenuItems } from "../context/menuItemsContext";
import { useWatchLater } from "../context/watchLaterContext";
import useClickOutside from "../hooks/useClickOutside";
import Wrapper from "../styles/VideoCard";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../utils/tmdb";
import { MenuIcon, SettingsIcon } from "./Icons";

const VideoCard = ({ details, page }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const { getMenuItems } = useMenuItems();
  const { videoInWatchLater } = useWatchLater();
  const { getVideoStatus } = useLikes();

  const isInWatchLater = videoInWatchLater(details.id);
  const isLiked = getVideoStatus(details.id)[0];
  const menuItems = getMenuItems(page, isInWatchLater, isLiked);

  useClickOutside(ref, () => setIsOpen(false));

  return (
    <Wrapper>
      <Link to={`/watch/${details.id}`} replace="true" className="video-image">
        <div className="image-overlay"></div>
        <img
          src={`${IMAGE_BASE_URL}${POSTER_SIZE}${details.poster_path}`}
          alt={details.title}
        />
      </Link>
      <div className="video-details">
        <h3>
          <Link to={`/watch/${details.id}`}>{details.title} </Link>
          <div>
            <Menu>
              <MenuButton>
                <SettingsIcon />
              </MenuButton>
              <MenuList>
                {menuItems.map((item, idx) => (
                  <MenuItem
                    onSelect={() => item.onClick(details.id, details)}
                    key={idx}
                  >
                    {item.icon} {item.name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </div>
        </h3>
        <p>{details.overview}</p>
        {/* {isOpen && (
          <div className="video-menu" ref={ref}>
            <ul>
              {menuItems.map((item, idx) => (
                <li onClick={() => item.onClick(details.id, details)} key={idx}>
                  {item.icon} {item.name}
                </li>
              ))}
            </ul>
          </div>
        )} */}
      </div>
    </Wrapper>
  );
};

export default VideoCard;

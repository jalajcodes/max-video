import { NavLink } from "react-router-dom";
import Wrapper from "../styles/Sidebar";
import {
  HistoryIcon,
  HomeIcon,
  LibIcon,
  LikeIcon,
  SubIcon,
  TrendingIcon,
  VidIcon,
} from "./Icons";
import SidebarAuth from "./SidebarAuth";

function Sidebar({ isSidebarOpen }) {
  return (
    <Wrapper open={isSidebarOpen}>
      <NavLink
        end
        to="/"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <div className="icon">
          <HomeIcon />
          <span>Home</span>
        </div>
      </NavLink>

      <NavLink
        to="/feed/trending"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <div className="icon">
          <TrendingIcon />
          <span>Trending</span>
        </div>
      </NavLink>

      <NavLink
        to="/feed/playlist"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <div className="icon">
          <SubIcon />
          <span>Playlist</span>
        </div>
      </NavLink>

      <div className="divider"></div>

      <NavLink
        to="/feed/library"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <div className="icon">
          <LibIcon />
          <span>Watch Later</span>
        </div>
      </NavLink>

      <NavLink
        to="/feed/history"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <div className="icon">
          <HistoryIcon />
          <span>History</span>
        </div>
      </NavLink>

      <NavLink
        to="/feed/my_videos"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <div className="icon">
          <VidIcon />
          <span>Your videos</span>
        </div>
      </NavLink>

      <NavLink
        to="/feed/liked_videos"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <div className="icon">
          <LikeIcon />
          <span>Liked videos</span>
        </div>
      </NavLink>

      <div className="divider"></div>

      <SidebarAuth />
    </Wrapper>
  );
}

export default Sidebar;

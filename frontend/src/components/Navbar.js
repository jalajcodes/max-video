import React from "react";
import Wrapper from "../styles/Navbar";
import { NavLink } from "react-router-dom";
import {
  AppsIcon,
  HamburgerIcon,
  LogoIcon,
  LogoText,
  SettingsIcon,
  UploadIcon,
} from "./Icons";
import Search from "./Search";
import GoogleAuth from "./GoogleAuth";
import { useAuth } from "../context/authContext";
import UserDropdown from "./UserDropdown";

const Navbar = ({ toggleSidebarOpen }) => {
  const user = useAuth();

  return (
    <Wrapper>
      <div className="logo flex-row">
        <HamburgerIcon
          onClick={toggleSidebarOpen}
          className="toggle-navhandler"
        />
        <span>
          <NavLink to="/">
            <LogoIcon className="logo-icon" />
            <LogoText className="logo-text" />
          </NavLink>
        </span>
      </div>

      <Search />

      <ul>
        <li>{user ? <UploadIcon /> : <AppsIcon />}</li>
        <li>{user ? <AppsIcon /> : <SettingsIcon />}</li>
        <li>{user ? <UserDropdown user={user} /> : <GoogleAuth />}</li>
      </ul>
    </Wrapper>
  );
};

export default Navbar;

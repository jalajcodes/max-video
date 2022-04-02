import React from "react";
import Wrapper from "../styles/Navbar";
import { NavLink } from "react-router-dom";
import {
  AppsIcon,
  HamburgerIcon,
  LogoIcon,
  LogoText,
  SettingsIcon,
} from "./Icons";
import Search from "./Search";
import GoogleAuth from "./GoogleAuth";

const Navbar = ({ toggleSidebarOpen }) => {
  return (
    <Wrapper>
      <div className="logo flex-row">
        <HamburgerIcon
          onClick={toggleSidebarOpen}
          className="toggle-navhandler"
        />
        <span>
          <NavLink to="/">
            <LogoIcon
              style={{
                width: 80,
                height: 24,
                marginTop: 8,
              }}
            />
            <LogoText
              style={{
                width: 80,
                height: 24,
                marginLeft: -60,
                marginTop: 5,
              }}
            />
          </NavLink>
        </span>
      </div>

      <Search />

      <ul>
        <li>
          <AppsIcon />
        </li>
        <li>
          <SettingsIcon />
        </li>
        <li>
          <GoogleAuth />
        </li>
      </ul>
    </Wrapper>
  );
};

export default Navbar;

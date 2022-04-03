import React from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "../styles/Sidebar";
import { sidebarItems } from "../utils/sidebar";
import SidebarAuth from "./SidebarAuth";

function Sidebar({ isSidebarOpen }) {
  return (
    <Wrapper open={isSidebarOpen}>
      {sidebarItems.map((item) => (
        <React.Fragment key={item.label}>
          <NavLink
            end
            to={item.to}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div className="icon">
              {item.icon}
              <span>{item.label}</span>
            </div>
          </NavLink>
          {item.divider && <div className="divider"></div>}
        </React.Fragment>
      ))}

      <div className="divider"></div>

      <SidebarAuth />
    </Wrapper>
  );
}

export default Sidebar;

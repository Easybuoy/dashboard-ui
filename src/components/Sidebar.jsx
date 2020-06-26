import React from "react";
import styled from "styled-components";

import SidebarItem from "./SidebarItem";
import Home from "../assets/images/home.svg";
import Bars from "../assets/images/bars.svg";
import Message from "../assets/images/message.svg";
import Mail from "../assets/images/mail.svg";
import Package from "../assets/images/package.svg";
import File from "../assets/images/file.svg";
import Calendar from "../assets/images/calendar.svg";
import User from "../assets/images/user.svg";
import Settings from "../assets/images/settings.svg";

const StyledSidebar = styled.aside`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 100vh;
  width: 6%;
  overflow-y: scroll;
  background-color: white;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  align-items: center;
  padding-top: 1.2rem;

  .bar {
    margin-bottom: 3rem;
  }

  a {
    margin: 1rem 0;
  }

  .active {
    background-color: #f6f9fc;
    padding: 0.5rem;
    border-radius: 2px;
  }
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <div className="bar">
        <SidebarItem icon={Bars} alt="bars" />
      </div>

      <SidebarItem icon={Home} active="active" alt="home" />
      <SidebarItem icon={Mail} alt="mail" />
      <SidebarItem icon={Package} alt="package" />
      <SidebarItem icon={File} alt="file" />
      <SidebarItem icon={Message} alt="message" />
      <SidebarItem icon={Calendar} alt="calendar" />
      <SidebarItem icon={User} alt="user" />
      <SidebarItem icon={Settings} alt="settings" />
    </StyledSidebar>
  );
};

export default Sidebar;

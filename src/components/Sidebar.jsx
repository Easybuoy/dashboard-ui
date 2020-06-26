import React from "react";
import styled from "styled-components";

import Home from '../assets/images/home.svg'
const StyledSidebar = styled.aside`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 100vh;
  overflow-x: scroll;
`;

const Sidebar = () => {
  return <StyledSidebar>
      <img src={Home} alt="home" />
  </StyledSidebar>;
};

export default Sidebar;

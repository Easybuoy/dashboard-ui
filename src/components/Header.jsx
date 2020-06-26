import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import HeaderData from "./HeaderData";

const StyledHeader = styled.nav`
  display: flex;
  flex-wrap: wrap;
  background-color: #182c4d;
  width: 100%;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Navigation />
      <Breadcrumb />
      <HeaderData />
    </StyledHeader>
  );
};

export default Header;

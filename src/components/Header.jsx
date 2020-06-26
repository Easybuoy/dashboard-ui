import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";

const StyledHeader = styled.nav`
  display: flex;
  flex-wrap: wrap;
  background-color: #182c4d;
  /* min-height: 30%; */
  width: 100%;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Navigation />
    </StyledHeader>
  );
};

export default Header;

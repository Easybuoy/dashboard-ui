import React from "react";
import styled from "styled-components";

import ChevronUp from "../assets/images/chevron-up.svg";
import ChevronDown from "../assets/images/chevron-down.svg";

const StyledChevron = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  img {
    width: 7px;
    height: 7px;
    margin: 0.1rem 0;
  }
`;

const Chevron = () => {
  return (
    <StyledChevron>
      <img src={ChevronUp} alt="up" />
      <img src={ChevronDown} alt="down" />
    </StyledChevron>
  );
};

export default Chevron;

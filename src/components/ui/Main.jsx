import React from "react";
import styled from "styled-components";

import AffiliateTraffic from "./AffiliateTraffic";
import Budget from "./Budget";

const StyledMain = styled.div`
  position: absolute;
  top: 340px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 94%;
`;
const Main = () => {
  return (
    <StyledMain>
      <AffiliateTraffic />
      <Budget />
    </StyledMain>
  );
};

export default Main;

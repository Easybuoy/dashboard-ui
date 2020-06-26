import React from "react";
import styled from "styled-components";

import AffiliateTraffic from "./AffiliateTraffic";
import Budget from "./Budget";
import SalesByCountry from "./SalesByCountry";
import Space from "./Space";
import Jobs from "./Jobs";

const StyledMain = styled.div`
  position: absolute;
  top: 340px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  
  .full {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 2rem;
  }
`;
const Main = () => {
  return (
    <StyledMain>
      <div className="full">
        <AffiliateTraffic />
        <Budget />
      </div>

      <div className="full">
        <SalesByCountry />
        <Space />
      </div>

      <div className="full">
        <Jobs />
      </div>
    </StyledMain>
  );
};

export default Main;

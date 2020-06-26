import React from "react";
import styled from "styled-components";

import Traffic from "./ui/HeaderDataItem";
import TrendingUp from "../assets/images/trending-up.svg";
import TrendingDown from "../assets/images/trending-down.svg";
import Dollar from "../assets/images/dollar-sign.svg";
import BarChart from "../assets/images/bar-chart.svg";

const StyledNavigationData = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`;

const NavigationData = () => {
  return (
    <StyledNavigationData>
      <Traffic
        title="TOTAL TRAFFIC"
        amount="123,456"
        icon={TrendingUp}
        iconBackground="#32ce97"
        percentageIncrease="+3.48%"
        duration="Since last month"
        percentageIncreaseColor="#53d8ab"
      />

      <Traffic
        title="NEW USERS"
        amount="2, 345"
        icon={TrendingDown}
        iconBackground="#f53c56"
        percentageIncrease="-3.48%"
        duration="Since last month"
        percentageIncreaseColor="#f53c56"
      />

      <Traffic
        title="SALES"
        amount="924"
        icon={Dollar}
        iconBackground="#7764e4"
        percentageIncrease="+3.48%"
        duration="Since last month"
        percentageIncreaseColor="#53d8ab"
      />

      <Traffic
        title="PERFORMANCE"
        amount="48.65%"
        icon={BarChart}
        iconBackground="#23cdef"
        percentageIncrease="+3.48%"
        duration="Since last month"
        percentageIncreaseColor="#53d8ab"
      />
    </StyledNavigationData>
  );
};

export default NavigationData;

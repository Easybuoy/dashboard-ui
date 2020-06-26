import React from "react";
import styled from "styled-components";

import Button from "../Button";

const StyledSalesByCountry = styled.div`
  background-color: white;
  height: 300px;
  width: 65%;
  border-radius: 5px;

  .header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
  }
`;

const SalesByCountry = () => {
  return (
    <StyledSalesByCountry>
      <div className="header">
        <p>Sales by Country</p>
        <Button>View Full Report</Button>
      </div>
      <hr />
    </StyledSalesByCountry>
  );
};

export default SalesByCountry;

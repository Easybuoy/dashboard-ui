import React from "react";
import styled from "styled-components";

import Button from "../Button";

const StyledJobs = styled.div`
  background-color: white;
  height: 300px;
  width: 90%;
  border-radius: 5px;
  padding: 1rem;

  .header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    h3 {
      color: #3b4c69;
      margin: 0;
    }
  }
`;

const Jobs = () => {
  return (
    <StyledJobs>
      <div className="header">
        <h3>Jobs Table</h3>
        <Button>Export Data</Button>
      </div>
    </StyledJobs>
  );
};

export default Jobs;

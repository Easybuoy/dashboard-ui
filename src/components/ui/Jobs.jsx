import React from "react";
import styled from "styled-components";

const StyledJobs = styled.div`
  background-color: white;
  height: 300px;
  width: 95%;
  border-radius: 5px;
  padding: 1rem;

  h3 {
    color: #3b4c69;
  }
`;

const Jobs = () => {
  return <StyledJobs>
    <h3>Jobs Table</h3>
  </StyledJobs>;
};

export default Jobs;

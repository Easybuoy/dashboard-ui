import React from "react";
import styled from "styled-components";

import Button from "../Button";

import ChevronUp from "../../assets/images/chevron-up.svg";
import ChevronDown from "../../assets/images/chevron-down.svg";

const StyledJobs = styled.div`
  background-color: white;
  height: 300px;
  width: 90%;
  border-radius: 5px;

  .header {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    h3 {
      color: #3b4c69;
      margin: 0;
    }
  }

  .th {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: #f1f3f9;
    padding: 0.5rem 1rem;

    div {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-right: 2rem;
      
      span {
        font-size: 0.7rem;
        margin-right: 0.5rem;
        color: #afbac8;
      }
      .select {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;

        img {
          width: 7px;
          height: 7px;
          margin: 0.1rem 0;
        }
      }
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

      <div className="th">
        <div>
          <span>PROJECT</span>
          <div className="select">
            <img src={ChevronUp} />
            <img src={ChevronDown} />
          </div>
        </div>

        <div>
          <span>CREATED AT</span>
        </div>
      </div>
    </StyledJobs>
  );
};

export default Jobs;

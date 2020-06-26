import React from "react";
import styled from "styled-components";

import Button from "../Button";
import Chevron from "../Chevron";
import Avatar from "../../assets/images/avatar.jpg";

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
    font-weight: bold;
    justify-content: space-between;
    div {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      /* margin-right: 3rem; */

      span {
        font-size: 0.6rem;
        margin-right: 0.5rem;
        color: #afbac8;
      }
    }
  }

  .tbody {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: white;
    padding: 0.5rem 1rem;
    justify-content: space-between;
    div {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      /* margin-right: 2rem; */

      /* span {
        font-size: 0.7rem;
        margin-right: 0.5rem;
        color: #afbac8;
      } */
      p {
        font-size: 0.8rem;
      }
    }

    .project {
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      p {
        font-size: 0.8rem;
        font-weight: bolder;
      }

      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 0.5rem;
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
          <Chevron />
        </div>

        <div>
          <span>CREATED AT</span>
        </div>

        <div>
          <span>STATUS</span>
          <Chevron />
        </div>

        <div>
          <span>BUDGET</span>
          <Chevron />
        </div>

        <div>
          <span>TEAM</span>
        </div>

        <div>
          <span>COMPLETION</span>
          <Chevron />
        </div>
      </div>

      <div className="tbody">
        <div className="project">
          <img src={Avatar} alt="avatar" />
          <p>Project X</p>
        </div>

        <div>
          <p>20/03/2020</p>
        </div>

        <div>
          <p>Pending</p>
        </div>

        <div>
          <p>$2500</p>
        </div>

        <div>
          <p>$2500</p>
        </div>

        <div>
          <p>$2500</p>
        </div>
      </div>
    </StyledJobs>
  );
};

export default Jobs;

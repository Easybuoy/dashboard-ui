import React from "react";
import styled from "styled-components";

import Button from "../Button";
import Chevron from "../Chevron";
import Progress from "../Progress";
import Avatar from "../../assets/images/avatar.jpg";

const StyledJobs = styled.div`
  background-color: white;
  height: 300px;
  width: 95%;
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
    padding: 0.5rem 2rem;
    font-weight: bold;
    justify-content: space-between;

    div {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      /* margin-right: 5rem; */

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
    justify-content: flex-start;
    .content {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-right: 10rem;

      /* span {
        font-size: 0.7rem;
        margin-right: 0.5rem;
        color: #afbac8;
      } */
      p {
        font-size: 0.8rem;
      }

      .circle {
        width: 10px;
        height: 10px;
        background-color: #f53c56;
        border-radius: 50%;
        margin-right: 0.5rem;
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

    .completion {
      display: flex;
      align-items: center;
      width: 15%;
      margin-right: 0;

      div {
        display: flex;
        align-items: center;
        width: 70%;
        margin-left: 0.7rem;
        div {
          margin: 0;
        }
      }
    }

    .team {
      display: flex;

      .one {
        position: absolute;
        z-index: 1;
      }

      .two {
        position: absolute;
        margin-left: 20px;
        z-index: 2;
      }

      .three {
        position: absolute;
        margin-left: 40px;
        z-index: 3;
      }
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
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
        <div className="project content">
          <img src={Avatar} alt="avatar" />
          <p>Project X</p>
        </div>

        <div className="content">
          <p>20/03/2020</p>
        </div>

        <div className="content">
          <div className="circle"></div>
          <p>Pending</p>
        </div>

        <div className="content">
          <p>$2500</p>
        </div>

        <div className="team content">
          <div className="one">
            <img src={Avatar} alt="avatar" />
          </div>

          <div className="two">
            <img src={Avatar} alt="avatar" />
          </div>

          <div className="three">
            <img src={Avatar} alt="avatar" />
          </div>
        </div>

        <div className="completion content">
          <p>20%</p>
          <Progress color="#f53c55" width="20%" />
        </div>
      </div>

      <div className="tbody" style={{ backgroundColor: "#f7fafc" }}>
        <div className="project content">
          <img src={Avatar} alt="avatar" />
          <p>Dashboard Enterprise</p>
        </div>

        <div className="content">
          <p>20/03/2020</p>
        </div>

        <div className="content">
          <div className="circle" style={{ backgroundColor: "#2ccf98" }}></div>
          <p>Completed</p>
        </div>

        <div className="content">
          <p>$4400</p>
        </div>

        <div className="team content">
          <div className="one">
            <img src={Avatar} alt="avatar" />
          </div>

          <div className="two">
            <img src={Avatar} alt="avatar" />
          </div>

          <div className="three">
            <img src={Avatar} alt="avatar" />
          </div>
        </div>

        <div className="completion content">
          <p>100%</p>
          <Progress color="#2ccf98" width="100%" />
        </div>
      </div>

      <div className="tbody">
        <div className="project content">
          <img src={Avatar} alt="avatar" />
          <p>The black Project</p>
        </div>

        <div className="content">
          <p>20/03/2020</p>
        </div>

        <div className="content">
          <div className="circle" style={{ backgroundColor: "#13cdef" }}></div>
          <p>On Schedule</p>
        </div>

        <div className="content">
          <p>$2133</p>
        </div>

        <div className="team content">
          <div className="one">
            <img src={Avatar} alt="avatar" />
          </div>

          <div className="two">
            <img src={Avatar} alt="avatar" />
          </div>

          <div className="three">
            <img src={Avatar} alt="avatar" />
          </div>
        </div>

        <div className="completion content">
          <p>90%</p>
          <Progress color="#13cdef" width="90%" />
        </div>
      </div>

      <div className="tbody" style={{ backgroundColor: "#f7fafc" }}>
        <div className="project content">
          <img src={Avatar} alt="avatar" />
          <p>React Project</p>
        </div>

        <div className="content">
          <p>20/03/2020</p>
        </div>

        <div className="content">
          <div className="circle" style={{ backgroundColor: "#fb6340" }}></div>
          <p>Delayed</p>
        </div>

        <div className="content">
          <p>$4566</p>
        </div>

        <div className="team content">
          <div className="one">
            <img src={Avatar} alt="avatar" />
          </div>

          <div className="two">
            <img src={Avatar} alt="avatar" />
          </div>

          <div className="three">
            <img src={Avatar} alt="avatar" />
          </div>
        </div>

        <div className="completion content">
          <p>72%</p>
          <Progress color="#fb6240" width="72%" />
        </div>
      </div>
    </StyledJobs>
  );
};

export default Jobs;

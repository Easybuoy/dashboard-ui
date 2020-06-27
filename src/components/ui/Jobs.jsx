import React from "react";
import styled from "styled-components";

import Button from "../Button";
import Chevron from "../Chevron";
import Progress from "../Progress";
import Avatar from "../../assets/images/avatar.jpg";
import OptionIcon from "../../assets/images/options.svg";

const StyledJobs = styled.div`
  background-color: white;
  height: 300px;
  width: 95%;
  border-radius: 5px;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  /* Zebra striping */
  tr:nth-of-type(odd) {
    background: #eee;
  }

  th {
    background-color: #f1f3f9;
    color: #8898ab;
    /* font-weight: bold; */
    font-size: 0.9rem;
  }

  td,
  th {
    padding: 10px;
    /* 	border: 1px solid #ccc;  */
    text-align: left;
    /* font-size: 18px; */

    div {
      display: flex;

      div {
        margin-left: 0.3rem;
      }
    }
  }

  /* 
Max width before this PARTICULAR table gets nasty
This query will take effect for any screen smaller than 760px
and also iPads specifically.
*/
  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    table {
      width: 100%;
    }

    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      /* position: absolute; */
      top: -9999px;
      left: -9999px;
    }

    /* 	tr { border: 1px solid #ccc; } */

    td {
      /* Behave  like a "row" */
      border: none;
      /* 		border-bottom: 1px solid #eee;  */
      position: relative;
      padding-left: 50%;
    }

    td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      /* Label the data */
      content: attr(data-column);

      color: #000;
      font-weight: bold;
    }
  }

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

  /* .tbody {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: white;
    padding: 1rem 0rem 0 1rem;
    justify-content: flex-start; */
  .content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: #848fa0;
    font-weight: bold;
    /* margin-right: 13rem; */

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
    width: 100%;
    margin-right: 0;

    .pr {
      display: flex;
      align-items: center;
      width: 70%;
      margin-left: 0.7rem;
      div {
        margin: 0;
      }
    }

    .option {
      /* width: 10%; */
      background-color: white;
      display: flex;
      border-radius: 50%;
      justify-content: center;
      padding: 0.4rem;
      margin-left: 0.5rem;
      img {
        width: 15px;
        height: 15px;
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
  /* } */
`;

const Jobs = () => {
  return (
    <StyledJobs>
      <div className="header">
        <h3>Jobs Table</h3>
        <Button>Export Data</Button>
      </div>

      {/* <div className="th">
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
        <div className="project content" style={{marginRight: '13rem'}}>
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

        <div className="team content" style={{marginRight: '15rem'}}>
          <div className="one">
            <img src={Avatar} alt="avatar" />
          </div>

          <div className="two">
            <img src={Avatar} alt="avatar" />
          </div>

          <div className="three" >
            <img src={Avatar} alt="avatar" />
          </div>
        </div>

        <div className="completion content">
          <p>20%</p>
          <Progress color="#f53c55" width="20%" />
        </div>
      </div>

      <div className="tbody" style={{ backgroundColor: "#f7fafc" }}>
        <div className="project content" style={{marginRight: '8rem'}}>
          <img src={Avatar} alt="avatar" />
          <p>Dashboard Enterprise</p>
        </div>

        <div className="content">
          <p>20/03/2020</p>
        </div>

        <div className="content" style={{marginRight: '12rem'}}>
          <div className="circle" style={{ backgroundColor: "#2ccf98" }}></div>
          <p>Completed</p>
        </div>

        <div className="content">
          <p>$4400</p>
        </div>

        <div className="team content" style={{marginRight: '15rem'}}>
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
        <div className="project content" style={{marginRight: '9.7rem'}}>
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
      </div> */}

      <table>
        <thead>
          <tr>
            <th>
              <div>
                PROJECT
                <Chevron />
              </div>
            </th>
            <th>CREATED AT</th>
            <th>
              <div>
                STATUS
                <Chevron />
              </div>
            </th>
            <th>
              <div>
                BUDGET
                <Chevron />
              </div>
            </th>
            <th>TEAM</th>
            <th>COMPLETION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-column="PROJECT">
              <div className="project content">
                <img src={Avatar} alt="avatar" />
                <p>Project X</p>
              </div>
            </td>
            <td data-column="CREATED AT">
              <div className="content">
                <p>20/03/2020</p>
              </div>
            </td>
            <td data-column="STATUS">
              <div className="content">
                <div className="circle"></div>
                <p>Pending</p>
              </div>
            </td>
            <td data-column="BUDGET">
              <div className="content">
                <p>$2500</p>
              </div>
            </td>
            <td data-column="TEAM">
              {" "}
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
            </td>
            <td data-column="COMPLETION">
              <div className="completion content">
                <p>20%</p>
                <Progress className="pr" color="#f53c55" width="20%" />
                <div className="option">
                  <img src={OptionIcon} alt="option" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </StyledJobs>
  );
};

export default Jobs;

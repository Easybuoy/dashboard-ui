import React from "react";
import styled from "styled-components";

import Home from "../assets/images/home-white.svg";

const StyledBreadcrumb = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  margin-top: 2rem;
  align-items: center;

  .left {
    display: flex;
    flex-wrap: wrap;
    color: white;
    align-items: center;

    h4 {
      margin: 0 1rem 0 1.5rem;
      font-size: 1.5rem;
    }

    img {
      margin-right: 1rem;
    }

    p {
      font-weight: 400;
      font-size: 0.9rem;
    }
  }

  .right {
    margin-right: 1rem;

    h3 {
      color: #23cdef;
      font-size: 1.7rem;
    }
  }
`;

const Breadcrumb = () => {
  return (
    <StyledBreadcrumb>
      <div className="left">
        <h4>Home</h4>

        <img src={Home} alt="home" />

        <p>Home - Dashboard</p>
      </div>
      <div className="right">
        <h3>WEEZIE</h3>
      </div>
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;

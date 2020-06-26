import React from "react";
import styled from "styled-components";

import Bell from "../assets/images/bell.svg";
import Help from "../assets/images/help.svg";
import Avatar from "../assets/images/avatar.jpg";

const StyledNavigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  padding: 0.5rem 0;

  .search {
    input {
      width: auto;
      margin-left: 1.4rem;
      border-radius: 3rem;
      padding: 1rem;
      border: none;
    }
  }

  .right {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-right: 1.4rem;

    img {
      margin-right: 1rem;
      width: 20px;
      height: 20px;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    p {
      color: white;
      font-size: 0.9rem;
    }
  }
`;
const Navigation = () => {
  return (
    <StyledNavigation>
      <div className="search">
        <input placeholder="Search" />
      </div>

      <div className="right">
        <img src={Bell} alt="notification" />
        <img src={Help} alt="notification" />

        <img className="avatar" src={Avatar} alt="logo" />

        <p>Silas Kayo</p>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;

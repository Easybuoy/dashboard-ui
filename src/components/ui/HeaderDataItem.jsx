import React from "react";
import styled from "styled-components";

const StyledHeaderDataItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 23%;
  background-color: white;
  margin: 2rem 0;
  border-radius: 10px;
  .top {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    margin-top: 1rem;
    .left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      p {
        color: #a6b2bf;
        font-size: 0.7rem;
        margin: 0.5rem 0;
      }

      span {
        color: #4d4e5c;
        font-weight: 500;
      }
    }

    .right {
      span {
        padding: 0.7rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .bottom {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 0.7rem;
    margin-left: 1rem;

    span {
      font-weight: bold;
    }
  }
`;

const HeaderDataItem = ({
  icon,
  iconBackground,
  title,
  amount,
  duration,
  percentageIncrease,
  percentageIncreaseColor,
  alt,
}) => {
  return (
    <StyledHeaderDataItem>
      <div className="top">
        <div className="left">
          <p>{title}</p>
          <span>{amount}</span>
        </div>
        <div className="right">
          <span style={{ backgroundColor: iconBackground }}>
            <img src={icon} alt={alt} />
          </span>
        </div>
      </div>

      <div className="bottom">
        <span style={{ color: percentageIncreaseColor }}>
          {percentageIncrease}
        </span>
        &nbsp;
        <p>{duration}</p>
      </div>
    </StyledHeaderDataItem>
  );
};

export default HeaderDataItem;

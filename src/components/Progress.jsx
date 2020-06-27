import React from "react";
import styled from "styled-components";

const StyledProgress = styled.div`
  .progress {
    margin-top: 1rem;
    background-color: #e5e9f2;
    height: 0.2em;
    position: relative;
    width: 100%;
    border-radius: 10px;
  }
  .progress-bar {
    background-size: 23em 0.25em;
    height: 100%;
    width: 70%;
    position: relative;
    border-radius: 10px;
  }
`;

const Progress = ({ color, width, ...rest }) => {
  return (
    <StyledProgress {...rest}>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ backgroundColor: color, width }}
        ></div>
      </div>
    </StyledProgress>
  );
};

export default Progress;

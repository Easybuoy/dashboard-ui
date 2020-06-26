import React from "react";
import styled from "styled-components";

const StyledSignup = styled.section`
  position: relative;
  width: 100%;
  background-color: #182c4d;
  .top {
    height: 60vh;
    background-color: #23cdef;
    clip-path: polygon(0% 0%, 100% 0%, 100% 40%, 0% 100%);
  }

  .bottom {
    height: 40vh;
    background-color: #182c4d;
  }

  .signup {
    position: absolute;
    background-color: white;
    height: 50vh;
    width: 35%;
    border-radius: 10px;
    /* display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center; */
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
`;

const Signup = () => {
  return (
    <StyledSignup>
      <div className="background">
        <div className="top"></div>
        <div className="bottom"></div>
      </div>

      <div className="signup"></div>
    </StyledSignup>
  );
};

export default Signup;

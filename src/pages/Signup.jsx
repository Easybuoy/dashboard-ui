import React from "react";
import styled from "styled-components";
import Input from "../components/Input";

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
    background-color: #f7fafc;
    height: 60vh;
    width: 35%;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;

    .header {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      flex-direction: column;
      width: 100%;
      h3 {
        font-weight: bold;
        color: #182c4d;
        margin: 0;
      }

      p {
        color: #788498;
        font-size: 0.8rem;
      }
    }

    .form {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      padding: 3rem;

      p {
        color: #788498;
        font-size: 0.8rem;
        font-weight: bold;
        span {
          color: #57d7bc;
        }
      }
    }
  }
`;

const Signup = () => {
  return (
    <StyledSignup>
      <div className="background">
        <div className="top"></div>
        <div className="bottom"></div>
      </div>

      <div className="signup">
        <div className="header">
          <h3>WEEZIE</h3>
          <p>Hey there, Let's get started.</p>
        </div>

        <div className="form">
          <Input />
          <Input />
          <Input />

          <p>
            Password Strength: <span>Strong</span>
          </p>
        </div>
      </div>
    </StyledSignup>
  );
};

export default Signup;

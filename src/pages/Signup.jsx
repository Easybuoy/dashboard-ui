import React from "react";
import styled from "styled-components";

import Input from "../components/Input";
import Button from "../components/Button";
import UserIcon from "../assets/images/user-auth.svg";
import MailIcon from "../assets/images/mail-auth.svg";
import PasswordIcon from "../assets/images/lock-auth.svg";

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
        margin: 0;
        font-weight: bold;
        font-style: italic;
        span {
          color: #57d7bc;
        }
      }

      .confirmation {
        display: flex;
        flex-wrap: wrap;
        margin: 1rem 0;
        justify-content: flex-start;
        input {
          background-color: white;
          border: none;
          margin-right: 0.5rem;
        }
        span {
          color: #4fd9f3;
        }
      }

      .action {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 1rem 0;
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
          <Input placeholder="Name" type="text" icon={UserIcon} />
          <Input placeholder="Username or email" type="text" icon={MailIcon} />
          <Input placeholder="Password" type="password" icon={PasswordIcon} />

          <p>
            Password Strength: <span>Strong</span>
          </p>

          <div className="confirmation">
            <input type="checkbox" />
            <p>
              I agree with <span>Privacy Policy</span>
            </p>
          </div>

          <div className="action">
            <Button
              style={{
                backgroundColor: "#23cdef",
                color: "white",
                border: "none",
                width: "100px",
              }}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </StyledSignup>
  );
};

export default Signup;

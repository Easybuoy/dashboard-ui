import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Input from "../components/Input";
import Button from "../components/Button";
import MailIcon from "../assets/images/mail-auth.svg";
import PasswordIcon from "../assets/images/lock-auth.svg";

const StyledSignin = styled.section`
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
    height: 50vh;
    width: 30%;
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
      margin-top: 1rem;

      h3 {
        font-weight: bolder;
        font-size: 1.5rem;
        color: #182c4d;
        margin: 0;
      }

      p {
        color: #788498;
        font-size: 0.8rem;
        font-weight: bolder;
        margin: 0.5rem 0;
      }
    }

    .form {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      padding: 0 3rem;

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
        margin: 2rem 0;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        .left {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          input {
            background-color: white;
            border: none;
            margin-right: 0.5rem;
          }
          span {
            color: #4fd9f3;
          }
        }
      }

      .action {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
      }
    }
  }

  .footer {
    position: absolute;
    border-radius: 10px;
    left: 45%;
    bottom: 200px;
    margin: auto;

    a {
      color: #12c3e5;
      text-decoration: none;
    }
  }
`;

const Signin = ({ history }) => {
  const login = () => history.push("/");

  return (
    <StyledSignin>
      <div className="background">
        <div className="top"></div>
        <div className="bottom"></div>
      </div>

      <div className="signup">
        <div className="header">
          <h3>WEEZIE</h3>
          <p>Welcome back! Please login to continue.</p>
        </div>

        <div className="form">
          <Input placeholder="Username or email" type="text" icon={MailIcon} />
          <Input placeholder="Password" type="password" icon={PasswordIcon} />

          <div className="confirmation">
            <div className="left">
              <input type="checkbox" />
              <p>Remember Me</p>
            </div>
            <div className="right">
              <p>Forgot Password?</p>
            </div>
          </div>

          <div className="action">
            <Button
              onClick={login}
              style={{
                backgroundColor: "#23cdef",
                color: "white",
                border: "none",
                width: "100px",
              }}
            >
              Sign in
            </Button>
          </div>
        </div>
      </div>

      <div className="footer">
        <p style={{ color: "white" }}>
          New to Product? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </StyledSignin>
  );
};

export default Signin;

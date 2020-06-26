import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.8rem;
  background-color: white;
  border-radius: 5px;
  color: #8d7ee8;
  border: 1px solid #8d7ee8;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  font-weight: bolder;
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;

import React from "react";
import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: white;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  padding: 0.5rem 1rem;
  width: 100%;
  border-radius: 5px;
  margin: 1rem 0;
  img {
    margin-right: 0.5rem;
  }
  input {
    border: none;
    padding: 0.5rem 1rem;
    width: 70%;
    font-weight: bold;
  }
`;

const Input = ({ placeholder, type, icon }) => {
  return (
    <StyledInput>
      <img src={icon} alt={placeholder} />

      <input placeholder={placeholder} type={type} />
    </StyledInput>
  );
};

export default Input;

import React from "react";
import styled from "styled-components";

import Image from "../../assets/images/avatar.jpg";
const StyledSpace = styled.div`
  background-color: white;
  width: 25%;
  border-radius: 5px;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .content {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    h4 {
      font-size: 1rem;
      font-weight: bold;
      color: #43435d;
      margin: 0 0 0.2rem 0;
      width: 100%;
    }

    span {
      color: #8898aa;
      font-size: 0.7rem;
    }

    p {
      font-size: 0.7rem;
      color: #52617b;
      font-weight: bold;
      line-height: 1.5;
      margin: 1rem 0;
    }

    a {
      color: #7d6be6;
      text-decoration: none;
      font-weight: bolder;
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
    }
  }
`;

const Space = () => {
  return (
    <StyledSpace>
      <img src={Image} alt="deep-dive" />

      <div className="content">
        <h4>Deep dive in the Lagos TechSpace</h4>
        <span>By John Snow on Apr 30th at 12:45 PM</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          quis autem voluptas. Iusto optio, dolorum omnis nisi corrupti aut
          suscipit neque eligendi quam sunt eos cum provident vitae nesciunt
          quos.
        </p>

        <a href="##">View article</a>
      </div>
    </StyledSpace>
  );
};

export default Space;

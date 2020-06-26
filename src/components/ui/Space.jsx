import React from "react";
import styled from "styled-components";

import Image from "../../assets/images/avatar.jpg";
const StyledSpace = styled.div`
  background-color: white;
  width: 30%;
  border-radius: 5px;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .content {
    padding: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    h4 {
      font-size: 0.8rem;
      font-weight: bold;
      color: #43435d;
      margin: 0 0 0.2rem 0;
    }

    span {
      color: #8898aa;
      font-size: 0.6rem;
    }

    p {
      font-size: 0.8rem;
      color: #52617b;
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
      </div>
    </StyledSpace>
  );
};

export default Space;

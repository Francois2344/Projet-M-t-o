import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.3);
  width: 70%;
  margin: auto;
  border-radius: 15px;
  padding: 10px;
  color: #38b6ff;

  .weather-data-title-info {
    background-color: #38b6ff;
    color: white;
    width: 100px;
    border-radius: 5px;
    margin: auto;
  }
  .weather-data__title {
    background-color: #38b6ff;
    width: 100px;
    color: white;
    border-radius: 5px;
    margin: auto;
  }
  .weather__tagline {
      color: #38b6ff;
  }
  .weather-data-description {
      color: #38b6ff;
  }
  .weather-data__title_min {
    background-color: #38b6ff;
    width: 100px;
    color: white;
    border-radius: 5px;
    margin: auto;
  }
  .weather-icon {
      width : 80px;
  }
`;

const Cards = (props) => {
  return <DIV className="cards">{props.children}</DIV>;
};

export default Cards;

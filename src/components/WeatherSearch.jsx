import React, {useContext} from "react";
import Context from './Context';
import styled from 'styled-components';

const FORM = styled.form`
  input {
    border-radius:5px;
    margin: 10px;
    }
  button {
    box-shadow: 0px 1px 0px 0px #f0f7fa;
	background:linear-gradient(to bottom, #00bfff 5%, #019ad2 100%);
	background-color:#00bfff;
	border-radius:6px;
	border:1px solid #057fd0;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:5px 11px;
	text-decoration:none;
  text-shadow:0px -1px 0px #5b6178;
  margin-top: 5px;
  }
`;

const WeatherSearch = () => {
  const {api_call} = useContext(Context)
  return (
    <div className="weather-search">
      <FORM onSubmit={api_call} className="weather-search__form">
        <input
          name="location"
          placeholder="Ville"
          autoComplete="off"
          className="weather-search__input"
          type="text"
        />
        <div className="weather-search__submit">
          <button className="weather-search__button">Search</button>
        </div>
      </FORM>
    </div>
  );
};

export default WeatherSearch;

'use client';
import React from 'react';
import styled from 'styled-components';

const PlayerPosition = ({ setSelectedPosition }) => {
  const handlePositionChange = (e) => {
    setSelectedPosition(e.target.value);
  };

  return (
    <StyledWrapper>
      <div id="firstFilter" className="filter-switch">
        <input defaultChecked id="all" name="options" type="radio" value="All" onChange={handlePositionChange} />
        <label className="option" htmlFor="all">All</label>
        
        <input id="goalkeeper" name="options" type="radio" value="Goalkeeper" onChange={handlePositionChange} />
        <label className="option" htmlFor="goalkeeper">Goalkeeper</label>
        
        <input id="defender" name="options" type="radio" value="Defender" onChange={handlePositionChange} />
        <label className="option" htmlFor="defender">Defender</label>
        
        <input id="midfielder" name="options" type="radio" value="Midfielder" onChange={handlePositionChange} />
        <label className="option" htmlFor="midfielder">Midfielder</label>
        
        <input id="forward" name="options" type="radio" value="Forward" onChange={handlePositionChange} />
        <label className="option" htmlFor="forward">Forward</label>
        
        <span className="background" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .filter-switch {
    border: 2px solid #F3F4F5;
    border-radius: 30px;
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
    width: 650px;
    overflow: hidden;
    background-color: #F3F4F5;
  }
  .filter-switch input {
    display: none;
  }
  .filter-switch label {
    flex: 1;
    text-align: center;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    transition: all 0.3s;
    z-index: 1;
    font-color: #242024;
    font-family: "Bebas Neue", serif;
    font-style: normal;
  }
  .filter-switch .background {
    position: absolute;
    width: 20%; /* Adjusted width to fit four options */
    height: 100%;
    background-color: #242024;
    border-radius: 30px;
    transition: left 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 0;
  }
  #all:checked ~ .background {
    left: 0%;
  }
  #goalkeeper:checked ~ .background {
    left: 20%;
  }
  #defender:checked ~ .background {
    left: 40%;
  }
  #midfielder:checked ~ .background {
    left: 60%;
  }
  #forward:checked ~ .background {
    left: 80%;
  }
  #all:checked + label[for="all"],
  #goalkeeper:checked + label[for="goalkeeper"],
  #defender:checked + label[for="defender"],
  #midfielder:checked + label[for="midfielder"],
  #forward:checked + label[for="forward"] {
    color: #F3F4F5;
    font-weight: bold;
  }
  #all:not(:checked) + label[for="all"],
  #goalkeeper:not(:checked) + label[for="goalkeeper"],
  #defender:not(:checked) + label[for="defender"],
  #midfielder:not(:checked) + label[for="midfielder"],
  #forward:not(:checked) + label[for="forward"] {
    color: #242024; /* Set color to white when unchecked */
  }
`;

export default PlayerPosition;

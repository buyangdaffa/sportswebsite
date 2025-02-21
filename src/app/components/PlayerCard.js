'use client';
import React from 'react';
import styled from 'styled-components';

const PlayerCard = ({ playerName, imageSrc, jerseyNumber }) => {
    return (
        <StyledWrapper>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Dokdo&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
            <div className="card">
                <div className="card__body">
                    <img className="card__image" src={imageSrc} alt={`${playerName}`} />
                </div>
                <div className="card__ribbon">
                    <label className="card__ribbon-label font-bebas">{`${jerseyNumber}. ${playerName}`}</label>
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .card {
    width: 200px; 
    height: 300px;
    margin: auto;
    background-color: #F3F4F5;
    text-align: center;
    border-radius: 4rem;
    border: 2px solid #fff;
    position: relative;
    overflow: hidden;
  }

  .card__body {
    padding: 0; /* Remove padding to allow the image to fill the card */
    max-width: 100%;
    height: calc(100% - 50px); /* Adjust height to leave space for the ribbon */
    margin: auto;
    overflow: hidden;
  }

  .card__image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the image covers the entire card body */
    margin-bottom: -2px; /* Adjust margin to bring image closer to ribbon */
  }

  .card__ribbon {
    margin-top: -2px; /* Adjust this to fine-tune the ribbon position */
    display: grid;
    place-items: center;
    height: 50px;
    background-color: #242024;
    position: absolute;
    width: 100%;
    bottom: 0;
    border-radius: 0 0 4rem 4rem;
  }

  .card__ribbon::after,
  .card__ribbon::before {
    content: "";
    position: absolute;
    width: 20px;
    aspect-ratio: 1/1;
    bottom: 100%;
    z-index: -2;
    background-color: #242024;
  }

  .card__ribbon::before {
    left: 0;
    transform-origin: left bottom;
    transform: rotate(45deg);
  }

  .card__ribbon::after {
    right: 0;
    transform-origin: right bottom;
    transform: rotate(-45deg);
  }

  .card__ribbon-label {
    font-size: 1.5rem; /* Increase this value to make the font larger */
    color: #fff;
  }
`;

export default PlayerCard;
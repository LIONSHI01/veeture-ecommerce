import React from "react";
import styled from "styled-components";

const StyledPageHero = styled.div`
  width: 100%;
  min-height: 35vh;
  background-color: var(--grey-light-3);
  display: grid;

  align-items: center;

  h1 {
    font-family: var(--ff-display);
    font-size: var(--fs-mega);
    letter-spacing: -2px;
    text-transform: capitalize;

    text-align: center;
  }
`;

const PageHero = ({ heading }) => {
  return (
    <StyledPageHero>
      <h1>{heading}</h1>
    </StyledPageHero>
  );
};

export default PageHero;

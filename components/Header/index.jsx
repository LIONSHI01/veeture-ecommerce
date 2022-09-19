import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import Hero from "../Hero";

const StyledHeader = styled.header`
  /* height: 100vh;
  width: 100vw; */
`;

const Header = () => {
  return (
    <StyledHeader>
      <Hero />
    </StyledHeader>
  );
};

export default Header;

import React from "react";
import styled from "styled-components";
import Hero from "../Hero";

const StyledHeader = styled.header`
  height: 100vh;
  width: 100%;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Hero />
    </StyledHeader>
  );
};

export default Header;

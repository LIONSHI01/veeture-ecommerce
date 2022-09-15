import React from "react";
import Image from "next/future/image";

import styled from "styled-components";
import HeroImg from "../../assets/hero-1.jpg";

const StyledHeader = styled.section`
  height: 100%;
  width: 100%;
  z-index: -1;

  .hero-container {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .hero-image {
    /* height: calc(100vh - 10rem); */
    height: auto;
    width: 100%;
  }
`;

const Hero = () => {
  return (
    <StyledHeader>
      <div className="hero-container">
        <Image src={HeroImg} alt="trendy picture" className="hero-image" />
      </div>
    </StyledHeader>
  );
};

export default Hero;

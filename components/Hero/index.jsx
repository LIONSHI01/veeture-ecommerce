import React from "react";
import Image from "next/image";

import styled from "styled-components";
// import HeroImg from "../../assets/hero-1.jpg";
// import HeroImg2 from "../../assets/hero-2.png";
// import HeroImg3 from "../../assets/hero-3.jpg";
import HeroImg4 from "../../assets/hero-4.webp";

const StyledHeader = styled.section`
  height: 70rem;
  width: 100%;
  z-index: -1;
  position: relative;

  .hero-container {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Hero = () => {
  return (
    <StyledHeader>
      <div className="hero-container">
        <Image
          src={HeroImg4}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          alt="hero"
        />
      </div>
    </StyledHeader>
  );
};

export default Hero;

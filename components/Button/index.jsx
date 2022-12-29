import React from "react";

import styled from "styled-components";

const Wrapper = styled.button`
  background-color: ${({ bgType }) =>
    bgType === "solid" ? "var(--black)" : "transparent"};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ bgType }) =>
    bgType === "solid" ? "var(--white)" : "var(--black)"};

  border: 2px solid var(--black);
  border-radius: var(--br-m);
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 500;
  font-size: var(--fs-x);
  text-transform: uppercase;
  color: var(--white);

  transition: all 0.3s;
  cursor: pointer;

  background-image: linear-gradient(120deg, #252a34 0%, #252a34 50%, #fff 50%);
  background-size: 250%;

  &:hover {
    background-position: 100%;
    color: var(--black);
  }
`;

const Button = ({
  children,
  bgType,
  fontSize,
  width,
  height,
  ...otherProps
}) => {
  return (
    <Wrapper
      bgType={bgType}
      fontSize={fontSize}
      width={width}
      height={height}
      {...otherProps}
    >
      {children}
    </Wrapper>
  );
};

export default Button;

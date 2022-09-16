import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";

const Wrapper = styled.button`
  cursor: pointer;
  font-size: var(--fs-x);
  font-weight: 600;
  color: var(--white);
  background-color: ${({ type }) =>
    type === "solid" ? "var(--black)" : "transparent"};
  border: 2px solid var(--black);
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  text-transform: uppercase;
  color: ${({ type }) => (type === "solid" ? "var(--white)" : "var(--black)")};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 100;
`;

const Button = ({ children, type, fontSize, width, height, ...otherProps }) => {
  return (
    <Wrapper
      type={type}
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

import React from "react";

import styled from "styled-components";

const Wrapper = styled.button`
  cursor: pointer;
  font-size: var(--fs-x);
  font-weight: 600;
  color: var(--white);
  background-color: ${({ bgType }) =>
    bgType === "solid" ? "var(--black)" : "transparent"};
  border: 2px solid var(--black);
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  text-transform: uppercase;
  color: ${({ bgType }) =>
    bgType === "solid" ? "var(--white)" : "var(--black)"};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 100;
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

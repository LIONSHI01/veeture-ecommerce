import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.a`
  cursor: pointer;
  font-size: var(--fs-x);
  font-weight: 600;
`;

const Button = ({ children, url, type, ...otherProps }) => {
  return (
    <Link href={url}>
      <Wrapper>{children}</Wrapper>
    </Link>
  );
};

export default Button;

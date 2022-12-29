import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";

const BaseButton = styled.a`
  padding: 1.2rem 2.6rem;
  border: 2px solid var(--black);
  transition: all 0.3s;
  font-size: var(--fs-x);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
  color: var(--white);
  border-radius: var(--br-m);
  text-transform: uppercase;

  background-image: linear-gradient(120deg, #252a34 0%, #252a34 50%, #fff 50%);
  background-size: 250%;

  &:hover {
    background-position: 100%;
    color: var(--black);
  }
`;

const OutlineButton = styled(BaseButton)`
  background-image: linear-gradient(120deg, #fff 0%, #fff 50%, #252a34 50%);
  background-color: var(--white);
  color: var(--black);

  &:hover {
    background-position: 100%;
    color: var(--white);
  }
`;

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  outline: "outline",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.outline]: OutlineButton,
  }[buttonType]);

const LinkButton = ({ children, url, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <Link href={url}>
      <CustomButton {...otherProps}>{children}</CustomButton>
    </Link>
  );
};

export default LinkButton;

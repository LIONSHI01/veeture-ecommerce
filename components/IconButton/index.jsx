import React from "react";
import { ButtonWrapper } from "./index.styles";

const IconButton = ({ children, size, ...otherProps }) => {
  return (
    <ButtonWrapper size={size} {...otherProps}>
      {children}
    </ButtonWrapper>
  );
};

export default IconButton;

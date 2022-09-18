import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  z-index: 100;
  transform: translateX(${({ visible }) => (visible ? "0" : "100%")});
  transition: all 0.5s;
`;

const Overlay = ({ state, ...otherProps }) => {
  return (
    <Wrapper visible={state} {...otherProps}>
      &nbsp;
    </Wrapper>
  );
};

export default Overlay;

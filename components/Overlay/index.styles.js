import styled, { css } from "styled-components";

const showUpStyles = css`
  opacity: 1;
  visibility: visible;
  display: unset;
  transform: translateX(0%);
`;

export const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${(props) => props.zIndex};

  background-color: rgba(0, 0, 0, 0.347);
  backdrop-filter: blur(5px);

  visibility: hidden;

  transition: all 0.3s ease-in-out;

  /* HIDE */
  opacity: 0;
  display: none;
  transform: translateX(100%);
  cursor: pointer;

  ${(props) => props.showup && showUpStyles}
`;

import styled, { css } from "styled-components";

const showupStyles = css`
  transform: translateX(0);
  opacity: 1;
`;

export const FilterSidebarContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  height: 100%;
  width: 80%;
  background-color: var(--white);
  z-index: 9999;
  box-shadow: var(--box-shadow-m);
  padding: 3rem;
  transition: all 0.3s cubic-bezier(0.83, -0.05, 0.5, 1.03);

  /* Hide Sidebar */
  opacity: 0;
  transform: translateX(100%);

  ${(props) => props.showup && showupStyles}

  .closeBtnContainer {
    position: absolute;
    top: 2.5rem;
    right: 2.5rem;
  }
`;

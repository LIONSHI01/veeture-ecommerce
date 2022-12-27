import styled, { css } from "styled-components";

const showupStyles = css`
  transform: translateX(0);
  opacity: 1;
`;

export const MobileSidebarContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 80%;
  background-color: var(--white);
  z-index: 9999;
  box-shadow: var(--box-shadow-m);
  padding: 3rem;
  transition: all 0.3s cubic-bezier(0.83, -0.05, 0.5, 1.03);

  /* Hide Sidebar */
  opacity: 0;
  transform: translateX(-100%);

  ${(props) => props.showup && showupStyles}

  .closeBtnContainer {
    position: absolute;
    top: 2.5rem;
    right: 2.5rem;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    list-style: none;
  }

  .link {
    &:visited,
    &:link {
      font-size: var(--fs-xxl);
      text-decoration: none;
      text-transform: uppercase;
      color: var(--black);
    }

    &:hover,
    &:active {
      color: var(--red);
    }
  }

  .auth-box,
  .accountBox {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    margin-top: 2rem;
  }

  .signout-btn {
    padding-bottom: 1rem;
    text-transform: uppercase;
    border-bottom: 2px solid var(--red);
    font-size: var(--fs-xxl);
    cursor: pointer;

    :hover {
      color: var(--black-light-2);
    }
  }
`;

export const UserInfoBox = styled.div`
  position: absolute;
  top: 3.5rem;
  left: 3.5rem;

  .username {
    font-size: var(--fs-xxl);
    text-transform: capitalize;
  }
`;

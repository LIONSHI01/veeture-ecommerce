import styled, { css } from "styled-components";
// import bgImage from "../../assets/sidebar-bg.jpg";

const showupStyles = css`
  transform: translateX(0);
  opacity: 1;
`;

export const MobileSidebarContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;

  top: 0;
  left: 0;
  height: 100%;
  width: 80%;
  background-color: var(--white);
  z-index: 9999;
  box-shadow: var(--box-shadow-m);

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
`;

export const UserInfoBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .backgroundContainer {
    position: relative;
    height: 30rem;
    width: 100%;
  }

  .background {
    filter: brightness(0.7);
  }

  .userIconBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .userIcon {
    height: 12rem;
    width: 12rem;
    border-radius: 100px;
    background: linear-gradient(45deg, #12c2e9 0%, #c471ed 41%, #f64f59 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: var(--mg-s);
    box-shadow: var(--bs-m);
  }

  .userName {
    font-size: var(--fs-xl);
    text-transform: capitalize;
    color: var(--white);
    font-weight: 500;
  }
`;

export const LinksContainer = styled.div`
  background-color: var(--bg);
  color: var(--white);
  padding: 4rem 0;
  width: 100%;
  height: 100%;

  & > *:first-child {
    margin-bottom: var(--mg-s);
    border-bottom: 1px solid var(--black-light);
  }

  .item {
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 2rem 3rem;
    cursor: pointer;

    :hover {
      background-color: var(--black-light);
    }

    svg {
      font-size: var(--fs-xxl);
    }
  }

  .link {
    font-size: var(--fs-xl);
    text-transform: uppercase;
  }
`;

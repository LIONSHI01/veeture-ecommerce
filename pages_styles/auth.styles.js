import styled from "styled-components";
import { device } from "../styles/devices";

export const PageContainer = styled.div`
  height: 80vh;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

export const FormSection = styled.div`
  margin: auto;
  padding: 0 14px;
  display: flex;
  flex-direction: column;
  width: 45rem;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const ImageSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media ${device.tablet} {
    height: 40%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 60rem; */
  width: 100%;
  margin: 5rem 0;

  .switch-btn {
    position: relative;
    overflow: hidden;
    border: none;
    background-color: transparent;
    font-size: var(--fs-x);
    align-self: flex-end;
    cursor: pointer;
    transition: all 0.3s;
    padding: 5px 0;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: var(--black);
      transform: translateX(100%);
      transition: all 0.3s;
    }
    /* border-bottom: 2px solid var(--black); */

    &:hover {
      color: var(--black-light-2);
    }
  }

  .switch-btn:hover.switch-btn::after {
    transform: translateX(0);
  }

  .button-group {
    display: grid;
    gap: 2rem;
  }

  form {
    margin-bottom: var(--mg-s);
  }

  h2 {
    margin: 10px 0;
    font-size: var(--fs-xxl);
    font-weight: 600;
    font-family: var(--ff-display);
    text-transform: capitalize;
  }

  span {
    font-size: var(--fs);
  }
`;

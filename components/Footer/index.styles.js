import styled from "styled-components";
import { device } from "../../styles/devices";

export const StyledFooter = styled.footer`
  min-height: 30rem;
  background-color: var(--bg);
  color: var(--white);

  .footer-container {
    max-width: var(--container);
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 5rem 14px;

    display: grid;
    grid-template-columns: 2fr 1fr 1fr;

    @media ${device.tablet} {
      grid-template-columns: 1fr;
      align-items: flex-start;
      row-gap: 2rem;
    }
  }

  .logo-container {
    align-self: center;
    & span {
      text-transform: uppercase;
      letter-spacing: -1px;
      font-size: 8.4rem;
      font-family: var(--ff-logo-font);
    }
  }

  .info-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    line-height: 1.7;
    font-size: var(--fs);
    text-transform: uppercase;

    h4 {
      font-size: var(--fs-x);
      font-weight: 600;
    }
  }

  .link {
    transition: all 0.3s;
    &:hover {
      color: var(--black-light-3);
    }
  }
`;

export const SocialCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;

  .subscribe {
    width: 100%;
    margin-bottom: var(--mg-m);

    @media ${device.tablet} {
      width: 30rem;
      margin-bottom: var(--mg-s);
    }

    p {
      display: block;
      font-size: var(--fs-x);
      text-transform: uppercase;
      margin-bottom: var(--mg-m);

      @media ${device.tablet} {
        margin-bottom: var(--mg-s);
      }
    }

    input {
      width: 100%;
      height: 100%;
      font-family: inherit;
      padding: 1rem;
      border: none;
      font-size: var(--fs);

      @media ${device.tablet} {
        width: 30rem;
        height: unset;
      }

      &:focus {
        outline: none;
      }
    }
  }

  .input-box {
    display: flex;
    align-items: center;
    background-color: var(--white);
  }

  .subs-icon-box {
    height: 4.8rem;
    width: 4.8rem;
    margin: 0.5rem;
    background-color: var(--black);

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: var(--br);
    cursor: pointer;

    svg {
      color: var(--white);
      height: 3rem;
      width: 3rem;
    }
  }

  .social-links {
    display: flex;
    gap: 2rem;
  }

  .icon-box {
    height: 4rem;
    width: 4rem;
    background-color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    svg {
      height: 2.5rem;
      width: 2.5rem;
      color: var(--black);
    }
  }
`;

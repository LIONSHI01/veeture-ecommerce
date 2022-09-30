import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { device } from "../../pages_styles/device";

import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

const StyledFooter = styled.footer`
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
      font-size: 5.4rem;
    }
  }

  .info-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    line-height: 1.7;

    font-size: var(--fs);
  }

  .link {
    transition: all 0.3s;
    &:hover {
      color: var(--black-light-3);
    }
  }
`;

const SocialCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
  /* background-color: var(--bg); */

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
      text-transform: capitalize;
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
  }

  .subs-icon {
    color: var(--white);
    height: 3rem;
    width: 3rem;
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
  }

  .icon {
    height: 2.5rem;
    width: 2.5rem;
    color: var(--black);
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-container">
        <div className="logo-container">
          <span>veeture</span>
        </div>
        <ul className="info-links">
          <li className="link">
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li className="link">
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li>
          <li className="link">
            <Link href="/">
              <a>Payment</a>
            </Link>
          </li>
          <li className="link">
            <Link href="/">
              <a>Terms</a>
            </Link>
          </li>
        </ul>
        <SocialCol>
          <div className="subscribe">
            <p>Subscribe to our news</p>
            <div className="input-box">
              <input type="email" placeholder="Your email address" />
              <button className="subs-icon-box">
                <SiMinutemailer className="subs-icon" />
              </button>
            </div>
          </div>
          <ul className="social-links">
            <li className="social">
              <Link href="/">
                <a className="icon-box">
                  <GrFacebookOption className="icon" />
                </a>
              </Link>
            </li>
            <li className="social">
              <Link href="/">
                <a className="icon-box">
                  <AiFillInstagram className="icon" />
                </a>
              </Link>
            </li>
            <li className="social">
              <Link href="/">
                <a className="icon-box">
                  <AiOutlineTwitter className="icon" />
                </a>
              </Link>
            </li>
            <li className="social">
              <Link href="/">
                <a className="icon-box">
                  <FaPinterestP className="icon" />
                </a>
              </Link>
            </li>
          </ul>
        </SocialCol>
      </div>
    </StyledFooter>
  );
};

export default Footer;

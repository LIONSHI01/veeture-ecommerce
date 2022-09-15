import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: 10rem;
  height: 30rem;
  background-color: var(--bg);
  color: var(--white);

  .footer-container {
    max-width: var(--container);
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0 14px;

    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
  }

  .logo-container {
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
    line-height: 1.2;

    font-size: var(--fs);
  }

  .link {
  }

  .social-links {
  }

  .social {
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

        <ul className="social-links">
          <li className="social">
            <Link href="/">
              <a>ICON</a>
            </Link>
          </li>
          <li className="social">
            <Link href="/">
              <a>ICON</a>
            </Link>
          </li>
          <li className="social">
            <Link href="/">
              <a>ICON</a>
            </Link>
          </li>
          <li className="social">
            <Link href="/">
              <a>ICON</a>
            </Link>
          </li>
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;

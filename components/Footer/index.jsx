import React from "react";
import Link from "next/link";

import { FOOTER_AOUBT_LINKS, SOCIAL_LINKS } from "../../assets/constants";

import { SiMinutemailer } from "../ReactIcons";
import { StyledFooter, SocialCol } from "./index.styles";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-container">
        <div className="logo-container">
          <span>vee</span>
        </div>
        <ul className="info-links">
          <h4 className="heading">About</h4>
          {FOOTER_AOUBT_LINKS.map(({ title, link }) => (
            <li className="link" key={title}>
              <Link href={link}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <SocialCol>
          <div className="subscribe">
            <p>Subscribe to our news</p>
            <div className="input-box">
              <input type="email" placeholder="Your email address" />
              <button className="subs-icon-box">
                <SiMinutemailer />
              </button>
            </div>
          </div>
          <ul className="social-links">
            {SOCIAL_LINKS.map(({ title, link, icon }) => (
              <li className="social" key={title}>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-box"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </SocialCol>
      </div>
    </StyledFooter>
  );
};

export default Footer;

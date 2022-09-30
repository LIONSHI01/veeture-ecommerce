import React from "react";
import Image from "next/image";
import Link from "next/link";
import ErrorImage from "../assets/404.jpg";
import LinkButton from "../components/LinkButton";

import {
  PageWrapper,
  LinkSection,
  ImageSection,
} from "../pages_styles/404.styles";

const ErrorPage = () => {
  return (
    <PageWrapper>
      <LinkSection>
        <div className="title">
          <h1>404</h1>
          <p>
            It looks like that page doesn&#39;t exist - May be you can find
            something helpful below.
          </p>
          <LinkButton url="/">Explore Our Site</LinkButton>
        </div>
        <div className="links">
          <h2>Can&#39;t find what you were looking for?</h2>
          <ul>
            <Link href="/men">
              <a className="link">
                <li>
                  Today&#39;s trend of <span>men</span> &rarr;
                </li>
              </a>
            </Link>
            <Link href="/women">
              <a className="link">
                <li>
                  Today&#39;s trend of <span>women</span> &rarr;
                </li>
              </a>
            </Link>

            <Link href="/products">
              <a className="link">
                <li>
                  Explore <span>all</span> the products &rarr;
                </li>
              </a>
            </Link>
          </ul>
        </div>
      </LinkSection>
      <ImageSection>
        <div className="image-container">
          <Image
            src={ErrorImage}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            alt="404"
          />
        </div>
      </ImageSection>
    </PageWrapper>
  );
};

export default ErrorPage;

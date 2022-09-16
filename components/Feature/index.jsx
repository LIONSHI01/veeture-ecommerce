import React from "react";

import Link from "next/link";
import Image from "next/image";

import FeatureMen from "../../assets/feature/feature-men.jpg";
import FeatureWomen from "../../assets/feature/feature-women.jpg";
import FeatureKids from "../../assets/feature/feature-kids.jpg";

import { StyledFeature } from "./index.styles";

const FeatureSection = () => {
  return (
    <StyledFeature>
      <div className="feature-container">
        <h2>Summer 2022</h2>
        <div className="feature-images">
          <Link href="/">
            <a>
              <figure className="card">
                <Image
                  width={600}
                  height={400}
                  src={FeatureMen}
                  alt="Featured Men"
                />
                <span>men</span>
              </figure>
            </a>
          </Link>
          <figure className="card">
            <Image
              width={600}
              height={400}
              src={FeatureWomen}
              alt="Featured Men"
            />
            <span>women</span>
          </figure>
          <figure className="card">
            <Image
              width={600}
              height={400}
              src={FeatureKids}
              alt="Featured Men"
            />
            <span>kids</span>
          </figure>
        </div>
      </div>
    </StyledFeature>
  );
};

export default FeatureSection;

import React from "react";

import Link from "next/link";
import Image from "next/image";

import {
  FeatureMenImage,
  FeatureWomenImage,
  FeaturePopImage,
} from "../../assets/imagesExport";
import { StyledFeature } from "./index.styles";

const FeatureSection = () => {
  return (
    <StyledFeature>
      <div className="feature-container">
        <h2>Summer 2022</h2>
        <div className="feature-images">
          <Link href="/men">
            <a>
              <figure className="card">
                <Image
                  width={600}
                  height={400}
                  src={FeatureMenImage}
                  alt="Featured Men"
                />
                <span>men</span>
              </figure>
            </a>
          </Link>
          <Link href="/women">
            <a>
              <figure className="card">
                <Image
                  width={600}
                  height={400}
                  src={FeatureWomenImage}
                  alt="Featured Men"
                />
                <span>women</span>
              </figure>
            </a>
          </Link>
          <Link href="/products">
            <a>
              <figure className="card">
                <Image
                  width={600}
                  height={400}
                  src={FeaturePopImage}
                  alt="Featured Popular"
                />
                <span>Popular</span>
              </figure>
            </a>
          </Link>
        </div>
      </div>
    </StyledFeature>
  );
};

export default FeatureSection;

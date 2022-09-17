import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

import { urlFor } from "../../lib/sanity-client.utils";

const Wrapper = styled.figure`
  width: 35rem;
  height: 40rem;
  cursor: pointer;

  .image-box {
    width: 100%;
  }

  h3 {
    text-transform: uppercase;
    font-size: var(--fs-x);
    line-height: 0;
    text-align: right;
    font-weight: 600;
  }
`;

const CategoryItem = ({ category }) => {
  const { title, categoryImage, type, basicCategory } = category;
  const adjTitle = title.split("-")[0];
  const ImageUrl = urlFor(categoryImage && categoryImage[0]);

  return (
    <Link href={`/${type}/${basicCategory}`}>
      <a>
        <Wrapper>
          <div className="image-box">
            <Image
              src={ImageUrl}
              alt="category image"
              width={400}
              height={400}
            />
          </div>
          <figcaption>
            <h3>{adjTitle}</h3>
          </figcaption>
        </Wrapper>
      </a>
    </Link>
  );
};

export default CategoryItem;

import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledHeaderBar = styled.div`
  margin-bottom: var(--mg-m);
  h1 {
    font-size: var(--fs-xl);
    text-transform: uppercase;
    margin-bottom: var(--mg-s);
    font-family: var(--ff-display);
  }

  .guide-links {
    a {
      font-size: var(--fs);
      color: var(--black-light-2);
      text-transform: capitalize;

      &:hover {
        color: var(--black);
      }
    }
  }
`;

const HeaderBar = ({ heading, type, category, productSlug }) => {
  return (
    <StyledHeaderBar>
      <h1>{heading}</h1>
      <div className="guide-links">
        <Link href="/">
          <a>Home&nbsp;</a>
        </Link>
        {type && (
          <Link href={`/${type}`}>
            <a>|&nbsp;{type}&nbsp;</a>
          </Link>
        )}
        {category && (
          <Link href={`/${type}/${category}`}>
            <a>|&nbsp;{category}&nbsp;</a>
          </Link>
        )}
        {productSlug && (
          <Link href={`/${type}/${category}/${productSlug}`}>
            <a>|&nbsp;{productSlug.replaceAll("-", " ")}</a>
          </Link>
        )}
      </div>
    </StyledHeaderBar>
  );
};

export default HeaderBar;

import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { device } from "../../styles/devices";

import Button from "../Button";
import CategoryItem from "../Category-Item";

const Wrapper = styled.section`
  margin-bottom: 5rem;
  padding: 0 14px;

  .section-container {
    max-width: var(--container);
    margin: 0 auto;
  }

  .list-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    gap: 1rem;

    @media ${device.tablet} {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }
  }

  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--mg-s);

    @media ${device.tablet} {
      margin-bottom: var(--mg-x);
    }

    h2 {
      font-size: var(--fs-xl);
      font-weight: 500;
      text-transform: uppercase;
    }
  }
`;

const CategoryList = ({ categories }) => {
  return (
    <Wrapper>
      <div className="section-container">
        <div className="heading">
          <h2>Category</h2>
          <Link href="/products">
            <Button height="4rem">view all products</Button>
          </Link>
        </div>
        <div className="list-container">
          {categories.map((category) => (
            <CategoryItem key={category._id} category={category} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default CategoryList;

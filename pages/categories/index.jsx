import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { client } from "../../lib/sanity-client.utils";

import CategoryList from "../../components/Category-List";
import Button from "../../components/Button";

const Wrapper = styled.main`
  .categories-container {
    max-width: var(--container);
    margin: 0 auto;
  }
  .heading-box {
  }

  .top {
    h1 {
      font-size: var(--fs-x);
      text-transform: uppercase;
      line-height: 0;
    }
    & span {
      font-size: var(--fs);
      color: var(--black-light-3);
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--mg-m);
    h2 {
      font-size: var(--fs-xl);
      font-weight: 500;
      text-transform: uppercase;
    }
  }
`;

const CategoryPage = ({ categories }) => {
  // console.log(categories);
  return (
    <Wrapper>
      <div className="categories-container">
        <div className="heading-box">
          <div className="top">
            <h1>men</h1>
            <span>Home|Men</span>
          </div>
          <div className="bottom">
            <h2>Category</h2>
            <Button url="/">view all products</Button>
          </div>
        </div>
        <CategoryList categories={categories} />
      </div>
    </Wrapper>
  );
};

export const getStaticProps = async () => {
  const query = '*[_type=="category"]';
  const categories = await client.fetch(query);

  return {
    props: {
      categories,
    },
  };
};

export default CategoryPage;

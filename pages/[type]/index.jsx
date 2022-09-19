import React from "react";
import styled from "styled-components";

import { client } from "../../lib/sanity-client.utils";

import CategoryList from "../../components/Category-List";
import RecommendList from "../../components/Recommend-List";

const Wrapper = styled.div`
  & .heading-container {
    max-width: var(--container);
    margin: 0 auto;
    padding-top: 3rem;

    h1 {
      font-size: var(--fs-xl);
      text-transform: uppercase;
      line-height: 0;
      margin: 2rem 0;
    }
    & span {
      font-size: var(--fs);
      color: var(--black-light-3);
    }
  }
`;

const CategoryPage = ({ categories, recommendProducts, type }) => {
  return (
    <Wrapper>
      <div className="heading-container">
        <h1>{type}</h1>
        <span>{`Home|${type}`}</span>
      </div>
      <CategoryList categories={categories} />
      <RecommendList products={recommendProducts} />
    </Wrapper>
  );
};

export const getStaticPaths = async () => {
  const paths = [{ params: { type: "men" } }, { params: { type: "women" } }];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { type } }) => {
  const categoryQuery = `*[_type=="category"&&type=="${type}"]`;
  const recomQuery = `*[_type=="product"&&Recommend==true&&type=="${type}"]`;

  const categories = await client.fetch(categoryQuery);
  const recommendProducts = await client.fetch(recomQuery);

  if (!categories) return { notFound: true };

  return {
    props: {
      categories,
      recommendProducts,
      type,
    },
  };
};

export default CategoryPage;

import React from "react";
import styled from "styled-components";

import { client } from "../lib/sanity-client.utils";
import HeaderBar from "../components/HeaderBar";
import CategoryList from "../components/Category-List";
import RecommendList from "../components/Recommend-List";

const Wrapper = styled.div`
  & .heading-container {
    max-width: var(--container);
    margin: 0 auto;
    padding: 3rem 14px 0 14px;
  }
`;

const CategoryPage = ({ categories, recommendProducts, type }) => {
  return (
    <Wrapper>
      <div className="heading-container">
        <HeaderBar heading={type} type={type} />
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

  return {
    props: {
      categories,
      recommendProducts,
      type,
    },
  };
};

export default CategoryPage;

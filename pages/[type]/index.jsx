import React from "react";
import Link from "next/link";

import { client } from "../../lib/sanity-client.utils";

import CategoryList from "../../components/Category-List";
import RecommendList from "../../components/Recommend-List";

import { Wrapper } from "./index.styles";

const CategoryPage = ({ categories, recommendProducts, type }) => {
  // console.log(recommendProducts);
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

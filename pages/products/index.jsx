import React from "react";

import { client } from "../../lib/sanity-client.utils";
import ProductCard from "../../components/Product-Card";
import FilterSidebar from "../../components/Sidebar/Filter-Sidebar";

import { Wrapper } from "./index.styles";

const ProductsPage = ({ products }) => {
  console.log(products);
  return (
    <>
      <FilterSidebar />
      <Wrapper>
        <div className="section-container">
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export const getStaticProps = async () => {
  const productsQuery = `*[_type=="product"]`;

  // Fetch data from Sanity
  const products = await client.fetch(productsQuery);

  return {
    props: {
      products,
    },
  };
};

export default ProductsPage;

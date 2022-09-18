import React, { useState } from "react";

import { client } from "../../lib/sanity-client.utils";
import ProductCard from "../../components/Product-Card";
import FilterSidebar from "../../components/Sidebar/Filter-Sidebar";

import { BiFilterAlt } from "react-icons/bi";

import { ProductMain } from "./index.styles";

const ProductsPage = ({ products }) => {
  console.log(products);
  const [openFilter, setOpenFilter] = useState(false);
  const filterHandler = () => setOpenFilter(true);

  const conditions = {
    type: ["men", "women"],
    category: ["boots", "clothing", "ankle-boots"],
    sizes: ["45"],
  };

  const filterFn = (products, conditions) => {
    // let filteredResult = [];
    let genderResult = [];
    let categoryResult = [];
    let sizeResult = [];
    const { type, category, sizes } = conditions;

    if (type.length > 0) {
      for (const i in type) {
        genderResult = [
          ...genderResult,
          ...products.filter((product) => product.type === type[i]),
        ];
      }
    }

    if (category.length > 0) {
      for (const i in category) {
        categoryResult = [
          ...categoryResult,
          ...genderResult.filter((product) => product.category === category[i]),
        ];
      }
    }
    // console.log(sizes[0]);
    if (sizes.length > 0) {
      for (const i in sizes) {
        sizeResult = [
          ...sizeResult,
          ...categoryResult.filter((product) =>
            product.sizes.includes(sizes[i])
          ),
        ];
      }
    }

    // price,  price[i] < x <  price[i] + 99

    return sizeResult;
  };

  const filterdList = filterFn(products, conditions);

  console.log(filterdList);

  return (
    <>
      <FilterSidebar filterState={openFilter} setFilterState={setOpenFilter} />
      <ProductMain>
        <div className="section-container">
          <button className="filter-btn" onClick={filterHandler}>
            <BiFilterAlt className="filter-icon" />
            <span>Filter &#38; Sorting</span>
          </button>
          <div className="gallary">
            {products?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </ProductMain>
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

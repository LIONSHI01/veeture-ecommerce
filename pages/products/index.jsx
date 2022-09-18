import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFilteredProducts } from "../../store/product/product.selector";
import { setALLProducts } from "../../store/product/product.actions";
import { client } from "../../lib/sanity-client.utils";
import ProductCard from "../../components/Product-Card";
import FilterSidebar from "../../components/Sidebar/Filter-Sidebar";

import { BiFilterAlt } from "react-icons/bi";

import { ProductMain } from "./index.styles";

const ProductsPage = ({ products }) => {
  const dispatch = useDispatch();
  const [openFilter, setOpenFilter] = useState(false);
  const filterHandler = () => setOpenFilter(true);
  const filteredProducts = useSelector(selectFilteredProducts);

  useEffect(() => {
    dispatch(setALLProducts(products));
  }, []);

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
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <p className="not-found">No Product found, please try again.</p>
            )}
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

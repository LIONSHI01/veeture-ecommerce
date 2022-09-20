import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFilteredProducts } from "../../store/product/product.selector";
import { setALLProducts } from "../../store/product/product.actions";
import { client } from "../../lib/sanity-client.utils";
import ProductCard from "../../components/Product-Card";
import FilterSidebar from "../../components/Sidebar/Filter-Sidebar";

import { BiFilterAlt } from "react-icons/bi";

import { ProductGroup, ProductMain } from "../../pages_styles/products.styles";

const ProductsPage = ({ products }) => {
  const dispatch = useDispatch();
  const [openFilter, setOpenFilter] = useState(false);

  const filteredProducts = useSelector(selectFilteredProducts);

  useEffect(() => {
    dispatch(setALLProducts(products));
  }, [products, dispatch]);

  return (
    <ProductGroup>
      <div className="group-container">
        <div className="sidebar-container">
          <FilterSidebar
            filterState={openFilter}
            setFilterState={setOpenFilter}
          />
        </div>
        <ProductMain>
          <div className="section-container">
            <div className="gallary">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              ) : (
                <div className="not-found">
                  <p>No Product found, please try again.</p>
                </div>
              )}
            </div>
          </div>
        </ProductMain>
      </div>
    </ProductGroup>
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

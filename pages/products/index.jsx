import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectLikeList } from "../../store/user/user.selector";
import { selectFilteredProducts } from "../../store/product/product.selector";
import { setALLProducts } from "../../store/product/product.actions";
import { client } from "../../lib/sanity-client.utils";
import ProductCard from "../../components/Product-Card";
import FilterSidebar from "../../components/Sidebar/Filter-Sidebar";
import { combinLikeList } from "../../lib/combineLikeList.utils";

import { ProductGroup, ProductMain } from "../../pages_styles/products.styles";
const likeList = [
  { _id: "18094ec3-c5e6-4ecc-a195-9e115db2127b" },
  { _id: "1e091726-0a48-4199-81b4-674f15c8d9ae" },
];

const ProductsPage = ({ products }) => {
  // let likeList = [];
  const dispatch = useDispatch();
  // const likeList = useSelector(selectLikeList);
  // TEMPORY

  const [openFilter, setOpenFilter] = useState(false);
  const filteredProducts = useSelector(selectFilteredProducts);

  const newAllProducts = combinLikeList(products, likeList);
  console.log(newAllProducts);

  useEffect(() => {
    // likeList = JSON.parse(localStorage.getItem("likeList"));
    // console.log(likeList);
    dispatch(setALLProducts(newAllProducts));
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

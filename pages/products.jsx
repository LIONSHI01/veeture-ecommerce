import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FiFilter } from "../components/ReactIcons";
import { selectWishlist } from "../store/user/user.selector";
import { selectFilteredProducts } from "../store/product/product.selector";
import { setALLProducts } from "../store/product/product.actions";
import { client } from "../lib/sanity-client.utils";
import { combinLikeList } from "../lib/combineLikeList.utils";

import {
  FilterBar,
  HeaderBar,
  FilterSidebar,
  DisplayList,
  Meta,
} from "../components";
import {
  ProductGroup,
  ProductMain,
  MasterContainer,
} from "../pages_styles/products.styles";

const ProductsPage = ({ products }) => {
  // CONFIGURATION
  const dispatch = useDispatch();

  // STATE MANAGEMENT
  const filteredProducts = useSelector(selectFilteredProducts);
  const likeList = useSelector(selectWishlist);
  const [showFilterSidebar, setShowFilterSidebar] = useState(false);

  useEffect(() => {
    const newAllProducts = combinLikeList(products, likeList);
    dispatch(setALLProducts(newAllProducts));
  }, [products, dispatch, likeList]);

  return (
    <>
      <Meta title="All Products" keywords="products, shoes, boots" />
      <ProductGroup>
        <MasterContainer>
          <div className="group-container">
            <div className="header-container">
              <HeaderBar heading="All Products" type="products" />
              <div
                className="filter-btn"
                onClick={() => setShowFilterSidebar((prev) => !prev)}
              >
                <FiFilter className="button-cion" />
                <span>FilterBar</span>
              </div>
            </div>

            <div className="sidebar-container">
              <FilterBar />
            </div>
            <ProductMain>
              <DisplayList products={filteredProducts} />
            </ProductMain>
          </div>
        </MasterContainer>
      </ProductGroup>
      <FilterSidebar
        showup={showFilterSidebar}
        setShowup={setShowFilterSidebar}
      />
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

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectSearchResults } from "../store/product/product.selector";
import ProductCard from "../components/Product-Card";
import FilterSidebar from "../components/Sidebar/Filter-Sidebar";

import { ProductGroup, ProductMain } from "../pages_styles/products.styles";

const SearchResultsPage = ({ products }) => {
  const dispatch = useDispatch();
  const [openFilter, setOpenFilter] = useState(false);

  const searchResults = useSelector(selectSearchResults);

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
              {searchResults.length > 0 ? (
                searchResults.map((product) => (
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

// export const getStaticProps = async () => {
//   const productsQuery = `*[_type=="product"]`;

//   // Fetch data from Sanity
//   const products = await client.fetch(productsQuery);

//   return {
//     props: {
//       products,
//     },
//   };
// };

export default SearchResultsPage;

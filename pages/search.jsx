import React from "react";
import { useSelector } from "react-redux";

import { selectSearchResults } from "../store/product/product.selector";
import { LinkButton, PageHero, ProductCard, Meta } from "../components";
import { ProductGroup, ProductMain } from "../pages_styles/search.styles";

const SearchResultsPage = () => {
  const searchResults = useSelector(selectSearchResults);

  return (
    <>
      <Meta title="Search Results" />

      <ProductGroup>
        <div className="hero-section">
          <PageHero heading="Search Results" />
          <p>
            <span>{searchResults.length}&nbsp;</span>
            products found ...
          </p>
        </div>
        <div className="group-container">
          <ProductMain>
            <div className="section-container">
              <div className="gallary">
                {searchResults.length > 0 ? (
                  searchResults.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))
                ) : (
                  <div className="not-found">
                    <p>Sorry, no Product found, please try again.</p>
                  </div>
                )}
              </div>
              <div className="btn-group">
                <LinkButton url="/products">View All Products</LinkButton>
              </div>
            </div>
          </ProductMain>
        </div>
      </ProductGroup>
    </>
  );
};

export default SearchResultsPage;

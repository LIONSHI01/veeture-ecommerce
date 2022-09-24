import React from "react";
import styled from "styled-components";
import ProductCard from "../Product-Card";

const Wrapper = styled.section`
  background-color: var(--bg-light);
  padding: 10rem 0;

  .section-container {
    max-width: var(--container);
    margin: 0 auto;

    h2 {
      font-size: var(--fs-xl);
      font-weight: 500;
      text-transform: uppercase;
      margin-bottom: var(--mg-m);
    }
  }

  .list-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, max-content));
    justify-content: space-between;
  }
`;

const RecommendList = ({ products }) => {
  return (
    <Wrapper>
      <div className="section-container">
        <h2>Recommended</h2>
        <div className="list-container">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default RecommendList;

import React from "react";

import styled from "styled-components";

import ProductCard from "../../Product-Card";

const SectionWrapper = styled.section`
  grid-column: 1/-1;
  margin: 5rem 0;
  .container {
    max-width: var(--container);

    margin: 0 auto;
    padding: 14px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
  }
  .heading {
    text-transform: capitalize;
    font-size: var(--fs-xxl);
    letter-spacing: -1px;
    margin-bottom: var(--mg-xl);
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--black-light-3);
    font-weight: 600;
    font-family: var(--ff-display);
  }
  .card-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 1rem;
  }
`;

const RecentViewSection = ({ recentViews }) => {
  const displayRecentViews = recentViews?.slice(1, 4);
  return (
    <SectionWrapper>
      <div className="container">
        <h2 className="heading">recent views</h2>
        <div className="card-container">
          {displayRecentViews.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RecentViewSection;

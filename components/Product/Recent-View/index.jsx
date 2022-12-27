import React from "react";

import styled from "styled-components";

// import ProductCard from "../../Product-Card";
import { DisplayList, ProductCard } from "../../index";

const SectionWrapper = styled.section`
  width: 100%;
  margin: 5rem 0;
  .container {
    max-width: var(--container);

    margin: 0 auto;
    padding: 14px;
    display: flex;
    flex-direction: column;
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
  const displayRecentViews = recentViews?.slice(1, 5);
  return (
    <SectionWrapper>
      <div className="container">
        <h2 className="heading">recent views</h2>
        <DisplayList products={displayRecentViews} />
      </div>
    </SectionWrapper>
  );
};

export default RecentViewSection;

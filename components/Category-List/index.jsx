import React from "react";
import styled from "styled-components";
import Link from "next/link";

import CategoryItem from "../Category-Item";

const Wrapper = styled.section`
  .list-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    gap: 1rem;
  }
`;

const CategoryList = ({ categories }) => {
  return (
    <Wrapper>
      <div className="list-container">
        {categories.map((category) => (
          <CategoryItem key={category._id} category={category} />
        ))}
      </div>
    </Wrapper>
  );
};

export default CategoryList;

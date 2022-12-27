import React from "react";
import { ProductCard } from "../index";
import { ListContainer } from "./index.styles";

const DisplayList = ({ products }) => {
  return (
    <ListContainer>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </ListContainer>
  );
};

export default DisplayList;

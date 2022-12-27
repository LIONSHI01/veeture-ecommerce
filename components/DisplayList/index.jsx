import React from "react";
import { ProductCard } from "../index";
import { ListContainer } from "./index.styles";

const DisplayList = ({ products }) => {
  return (
    <ListContainer>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <div className="not-found">
          <p>No Product found, please try again.</p>
        </div>
      )}
    </ListContainer>
  );
};

export default DisplayList;

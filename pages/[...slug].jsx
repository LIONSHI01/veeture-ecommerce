import React from "react";

import Image from "next/future/image";
import { client, urlFor } from "../lib/sanity-client.utils";
import DetailSection from "../components/Product/Details-Section";
import ProductCard from "../components/Product-Card";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 5rem 0;

  .product-details-container {
    max-width: var(--container);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .image-section {
    grid-column: 1 / span 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(45rem, max-content));
    gap: 2rem;
  }

  .details-section {
    grid-column: 3 / -1;
  }
`;

const ProductDetailsPage = ({ product, categoryProductArr }) => {
  if (!product && !categoryProductArr) {
    return <p>Not Found</p>;
  }

  // Return Product Details Page
  if (product) {
    // console.log(product);
    const { images } = product;

    const imageUrls = images?.map((image) => urlFor(image));
    return (
      <Wrapper>
        <div className="product-details-container">
          <section className="image-section">
            {imageUrls.map((url, i) => (
              <Image
                key={i}
                src={url}
                width={450}
                height={450}
                alt="PRODUCT IMAGE"
              />
            ))}
          </section>
          <DetailSection product={product} />
        </div>
      </Wrapper>
    );
  }

  // Return Category Page
  if (categoryProductArr) {
    // console.log(categoryProductArr);
    return (
      <Wrapper>
        <div className="product-details-container">
          {categoryProductArr.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </Wrapper>
    );
  }
};

export const getServerSideProps = async ({ params: { slug } }) => {
  // Retrieve URL slug
  const type = slug && slug[0];
  const category = slug && slug[1];
  const productSlug = slug && slug[2];

  // Build Query
  const productQuery = `*[_type=="product"&&type=="${type}"&&category=="${category}"&&slug.current=="${productSlug}"]`;
  const categoryProductsQuery = `*[_type=="product"&&type=="${type}"&&category=="${category}"]`;

  // Fetch data from Sanity
  const categoryProductArr = await client.fetch(categoryProductsQuery);
  const singleProductArr = await client.fetch(productQuery);
  const product = singleProductArr[0];

  // Return Product Details Page Data
  if (slug.length === 3 && product) {
    return {
      props: {
        product,
      },
    };
  }

  // Return Category Page Data
  if (slug.length == 2 && categoryProductArr) {
    return {
      props: {
        categoryProductArr,
      },
    };
  }

  if (!product && !categoryProductArr) return { notFound: true };

  if (slug.length === 1 && slug !== "men" && slug !== "women")
    return { notFound: true };
};

export default ProductDetailsPage;

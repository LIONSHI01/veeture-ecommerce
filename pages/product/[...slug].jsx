import React from "react";
import Link from "next/link";
import Image from "next/future/image";
import { client, urlFor } from "../../lib/sanity-client.utils";
import DetailSection from "../../components/Product/Details-Section";

// import { Wrapper } from "./index.styles";
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

const ProductDetails = ({ product }) => {
  const { defaultProductVariant, category, price, title } = product;
  const { images } = defaultProductVariant;
  const imageUrls = images?.map((image) => urlFor(image));

  console.log(product);

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
};

export const getServerSideProps = async ({ params: { slug } }) => {
  console.log(slug);

  const type = slug && slug[0];
  const category = slug && slug[1];
  const productSlug = slug && slug[2];
  console.log(type, category, productSlug);

  const productQuery = `*[_type=="product"&&type=="${type}"&&category=="${category}"&&slug.current=="${productSlug}"]`;
  const product = await client.fetch(productQuery);

  return {
    props: {
      product,
    },
  };
};
export default ProductDetails;

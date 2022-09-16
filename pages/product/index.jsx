import React from "react";
import Link from "next/link";
import Image from "next/future/image";
import { client, urlFor } from "../../lib/sanity-client.utils";
import DetailSection from "../../components/Product/Details-Section";

import { Wrapper } from "./index.styles";

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

export const getStaticProps = async () => {
  const productQuery = `*[_type=="product"&&slug.current=="lana-pilar"]`;

  const productArr = await client.fetch(productQuery);
  const product = productArr[0];
  if (!product) return { notFound: true };

  return {
    props: {
      product,
    },
  };
};

export default ProductDetails;

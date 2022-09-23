import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

import Link from "next/link";
import { client, urlFor } from "../lib/sanity-client.utils";
import DetailSection from "../components/Product/Details-Section";
import ProductCard from "../components/Product-Card";

import RecentViewSection from "../components/Product/Recent-View";
import { selectRecentViews } from "../store/user/user.selector";

import {
  ProductDetails,
  CategoryDetails,
} from "../pages_styles/product-list.styles";

const ProductDetailsPage = ({
  product,
  categoryProductArr,
  type,
  category,
}) => {
  // CONFIGURATION

  const recentViews = useSelector(selectRecentViews);
  if (!product && !categoryProductArr) {
    return <p>Not Found</p>;
  }

  // Return Product Details Page
  if (product) {
    const { images } = product;

    const imageUrls = images?.map((image) => urlFor(image));
    return (
      <ProductDetails>
        <div className="product-details-container">
          <section className="image-section">
            {imageUrls.map((url, i) => (
              <Image
                key={i}
                src={url}
                width={450}
                height={600}
                objectFit="cover"
                alt="PRODUCT IMAGE"
              />
            ))}
          </section>
          <DetailSection product={product} />
          {recentViews.length > 1 && (
            <RecentViewSection recentViews={recentViews} />
          )}
        </div>
      </ProductDetails>
    );
  }

  // Return Category Page
  if (categoryProductArr) {
    return (
      <CategoryDetails>
        <div className="container">
          <div className="heading">
            <h1>{type}</h1>
            <div className="guide-links">
              <Link href="/">
                <a>Home&nbsp;|</a>
              </Link>
              <Link href={`/${type}`}>
                <a>&nbsp;{type}&nbsp;|</a>
              </Link>
              <Link href={`/${category}`}>
                <a>&nbsp;{category}</a>
              </Link>
            </div>
          </div>
          <div className="product-details-container">
            {categoryProductArr.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </CategoryDetails>
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
        slug,
        type,
        category,
      },
    };
  }

  // Return Category Page Data
  if (slug.length == 2 && categoryProductArr) {
    return {
      props: {
        categoryProductArr,
        type,
        category,
      },
    };
  }

  if (!product && !categoryProductArr) return { notFound: true };

  if (slug.length === 1 && slug !== "men" && slug !== "women")
    return { notFound: true };
};

export default ProductDetailsPage;

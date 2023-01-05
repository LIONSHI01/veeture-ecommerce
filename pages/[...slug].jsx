import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

import { selectRecentViews } from "../store/user/user.selector";
import { client, urlFor } from "../lib/sanity-client.utils";

import {
  DetailSection,
  HeaderBar,
  RecentViewSection,
  DisplayList,
  Navbar,
  Meta,
} from "../components";
import {
  ProductDetails,
  CategoryDetails,
} from "../pages_styles/product-details-page.styles";

const ProductDetailsPage = ({
  product,
  categoryProductArr,
  type,
  category,
  productSlug,
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
      <>
        <Meta title={productSlug} />
        <Navbar />

        <ProductDetails>
          <div className="master-container">
            <HeaderBar
              heading="Product Details"
              type={type}
              category={category}
              productSlug={productSlug}
            />
            <div className="product-details-container">
              <section className="image-section">
                {imageUrls.map((url, i) => (
                  <div className="image-container" key={i}>
                    <Image
                      src={url}
                      objectFit="cover"
                      layout="fill"
                      objectPosition="center"
                      alt="product"
                    />
                  </div>
                ))}
              </section>
              <div className="details-container">
                <DetailSection product={product} />
              </div>
            </div>
            <div className="recent-views-container">
              {recentViews.length > 0 && (
                <RecentViewSection recentViews={recentViews} />
              )}
            </div>
          </div>
        </ProductDetails>
      </>
    );
  }

  // Return Category Page
  if (categoryProductArr) {
    return (
      <>
        <Meta title={`${type} ${category}`} />
        <CategoryDetails>
          <div className="container">
            <HeaderBar
              heading="Product Details"
              type={type}
              category={category}
            />
            <DisplayList products={categoryProductArr} />
          </div>
        </CategoryDetails>
      </>
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
        productSlug,
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

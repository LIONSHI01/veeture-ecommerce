import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "qhawkln0",
  dataset: "production",
  apiVersion: "2022-09-16",
  useCdn: true,
  token: process.env.PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  if (source) {
    return builder.image(source).url();
  }
};

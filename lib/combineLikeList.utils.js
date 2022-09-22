export const combinLikeList = (allProducts, likeList) => {
  const results = allProducts.map((product) => {
    for (const i in likeList) {
      if (product._id === likeList[i]._id) return { ...product, isLiked: true };
    }
    return product;
  });

  return results;
};

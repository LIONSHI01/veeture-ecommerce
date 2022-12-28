export const isLikedCompare = (wishlist, productId) => {
  if (wishlist.length === 0 || wishlist === null) return false;
  const isLiked = wishlist.find((item) => item._id === productId);
  return isLiked;
};

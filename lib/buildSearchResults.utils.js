const buildSearchResults = (allProducts, searchWords) => {
  const matches = allProducts.filter(
    (item) =>
      item.title.toLowerCase().includes(searchWords) ||
      item.category.toLowerCase().includes(searchWords)
  );

  return matches;
};

export default buildSearchResults;

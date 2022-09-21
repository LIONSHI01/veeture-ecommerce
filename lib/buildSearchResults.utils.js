const buildSearchResults = (allProducts, searchWords) => {
  const matches = allProducts.filter(
    (item) =>
      item.title.toLowerCase().includes(searchWords.toLowerCase()) ||
      item.category.toLowerCase().includes(searchWords.toLowerCase())
  );

  return matches;
};

export default buildSearchResults;

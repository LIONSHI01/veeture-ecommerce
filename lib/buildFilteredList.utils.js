export const filterFn = (products, conditions) => {
  let filteredResult = [];
  let genderResults = [];
  let categoryResults = [];
  let sizeResults = [];
  let clothingResults = [];
  let priceResults = [];

  const { gender, category, sizes, clothing, price } = conditions;

  // If not conditions, return all products
  if (
    gender?.length === 0 &&
    category?.length === 0 &&
    price?.length === 0 &&
    sizes?.length === 0 &&
    clothing?.length === 0
  )
    filteredResult = products;

  // filter all products  with conditions
  if (gender?.length > 0) {
    for (const i in gender) {
      genderResults = [
        ...genderResults,
        ...products.filter((product) => product.type === gender[i]),
      ];
      filteredResult = genderResults;
    }
  } else {
    // if no Gender condition, return all products
    genderResults = products;
    filteredResult = products;
  }

  if (category?.length > 0) {
    for (const i in category) {
      categoryResults = [
        ...categoryResults,
        ...genderResults.filter((product) => product.category === category[i]),
      ];
      filteredResult = categoryResults;
    }
  } else {
    // if no category condition, return previous filter result
    categoryResults = genderResults;
  }

  if (price?.length > 0) {
    for (const i in price) {
      priceResults = [
        ...priceResults,
        ...categoryResults.filter(
          (product) =>
            product.price >= +price[i] && product.price <= +price[i] + 99
        ),
      ];
      filteredResult = priceResults;
    }
  } else {
    priceResults = categoryResults;
  }

  if (sizes?.length > 0) {
    for (const i in sizes) {
      sizeResults = [
        ...sizeResults,
        ...priceResults.filter((product) => product.sizes.includes(sizes[i])),
      ];
      filteredResult = sizeResults;
    }
  } else {
    sizeResults = priceResults;
  }

  if (clothing?.length > 0) {
    for (const i in clothing) {
      clothingResults = [
        ...clothingResults,
        ...priceResults.filter((product) =>
          product.sizes.includes(clothing[i])
        ),
      ];
      filteredResult = clothingResults;
    }
  } else {
    clothingResults = priceResults;
  }

  if (sizes?.length > 0 && clothing.length > 0) {
    filteredResult = [...sizeResults, ...clothingResults];
  }

  let uniqueObjArray = [
    ...new Map(filteredResult?.map((item) => [item["_id"], item])).values(),
  ];

  return uniqueObjArray;
};

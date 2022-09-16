export const buildTime = () => {
  const today = new Date();
  // Add 3 days from today
  const addedDate = today.setDate(today.getDate() + 3);
  // Convert to yyyy-mm-dd
  const deliveryDate = new Date(addedDate).toISOString().substring(0, 10);

  return deliveryDate;
};

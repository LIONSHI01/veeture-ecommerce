import axios from "axios";

export const checkoutRequest = async (cartItems, email) => {
  try {
    const res = await axios({
      url: "/api/stripe",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        cartItems,
        email,
      },
    });
    return res;
  } catch (err) {
    return err.message;
  }
};

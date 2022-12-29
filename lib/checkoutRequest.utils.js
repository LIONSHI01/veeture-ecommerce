import axios from "axios";

export const checkoutRequest = async (userId, cartItems, email) => {
  try {
    const res = await axios({
      url: "/api/stripe",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        userId,
        cartItems,
        email,
      },
    });
    return res;
  } catch (err) {
    return err.message;
  }
};

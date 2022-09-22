import axios from "axios";

export const register = async ({ name, email, password }) => {
  try {
    const res = await axios({
      url: "/api/auth/signup",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: {
        name,
        email,
        password,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updateAccount = async (wishlist) => {
  try {
    const res = await axios({
      url: "/api/auth/updateAccount",
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: { wishlist },
    });

    // console.log("Response from API", res);
  } catch (error) {
    console.log(error);
  }
};

export const getUserProfile = async () => {
  try {
    const res = await axios({
      url: "/api/auth/account",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return res.data.data.user;
    // console.log("Response from API", res);
  } catch (error) {
    console.log(error);
  }
};

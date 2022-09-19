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

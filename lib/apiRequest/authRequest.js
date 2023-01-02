import axios from "axios";

// Include signIn and Route callback fn
export const registerAndLogin = async (
  { name, email, password },
  signinCB,
  routeCB
) => {
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

    if (res.status === 201) {
      signinCB("credentials", {
        email,
        password,
        redirect: false,
      });
      routeCB.replace("/");
    }
    return {
      status: res.status,
      message: "Sign up successfully! And you're signed in.",
    };
  } catch (error) {
    return {
      status: error.response.status,
      message: error.response.data.message,
    };
  }
};

export const updateAccount = async (updateData, dataType) => {
  try {
    const res = await axios({
      url: "/api/auth/updateAccount",
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: { updateData, dataType },
    });

    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserProfile = async () => {
  try {
    const res = await axios({
      url: "/api/auth/account",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return res?.data?.data?.user;
  } catch (error) {
    console.log(error);
  }
};

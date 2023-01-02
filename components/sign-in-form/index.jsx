import { useState } from "react";
import { signIn } from "next-auth/react";

import { SignInContainer, ButtonsContainer } from "./index.styles";

import { FormInput, Button } from "../index";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const googleSignHandler = async () => {
    await signIn("google");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const res = signIn("credentials", {
      email,
      password,
      redirect: "/",
    });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="text"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="password"
          type="password"
          required
          name="password"
          minLength="6"
          value={password}
          onChange={handleChange}
        />
        <ButtonsContainer>
          <Button width="50%" height="5rem" bgType="solid" type="submit">
            Sign In
          </Button>
          <Button onClick={googleSignHandler} type="button">
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;

import { useState } from "react";

import Button from "../Button";

import FormInput from "../form-input";

import { SignUpContainer } from "./index.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  // Moniter the sum state of signup form
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Spread the original object, modify object with new values
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // 1) confirm password , confirmPassword match
    if (password !== confirmPassword) {
      alert("password and confirm password are not match,Please try again!");
      return;
    }

    // 2) create userDoc in firebase
    try {
      // Reset form fields
      resetFormFields();
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/email-already-in-use") {
        alert("This email is already registerd, please try another one!");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <SignUpContainer>
      <h2>Dont have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          value={displayName}
          name="displayName"
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          value={email}
          name="email"
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          value={password}
          name="password"
          minLength="6"
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          value={confirmPassword}
          name="confirmPassword"
          minLength="6"
        />
        <Button>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;

import { useState } from "react";
import { toast } from "react-toastify";

import Button from "../Button";
import FormInput from "../form-input";

import { SignUpContainer } from "./index.styles";
import { register } from "../../lib/authRequest";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  // Moniter the sum state of signup form
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { name, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // 1) confirm password , confirmPassword match
    if (password !== confirmPassword) {
      toast.error(
        "password and confirm password are not match, Please try again!"
      );
      return;
    }

    // 2) create userDoc in MongoDB
    const res = await register(formFields);
    console.log(res);

    if (res.status !== 201) {
      toast.error(`${res.message}`);
    }
    if (res.status == 201) toast.success(`${res.message}`);

    resetFormFields();
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
          value={name}
          name="name"
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
        <Button onClick={handleSubmit} width="50%" height="5rem" bgType="solid">
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;

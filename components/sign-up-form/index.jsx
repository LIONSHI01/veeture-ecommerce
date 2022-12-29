import { useState } from "react";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";

import Button from "../Button";
import FormInput from "../form-input";
import { SignUpContainer } from "./index.styles";
import { register } from "../../lib/apiRequest/authRequest";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = ({ setSignup }) => {
  // STATE MANAGEMENT
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, confirmPassword } = formFields;

  // HANDLERS
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

    if (res.status !== 201) {
      toast.error(`${res.message}`);
    } else if (res.status == 201) toast.success(`${res.message}`);

    resetFormFields();
  };

  return (
    <SignUpContainer>
      <h2>Create your account</h2>
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
        <Button
          onClick={handleSubmit}
          width="100%"
          height="5rem"
          bgType="solid"
        >
          Sign Up
        </Button>
      </form>
      <button className="switch-btn" onClick={setSignup}>
        Already have an account?
      </button>
    </SignUpContainer>
  );
};

export default SignUpForm;

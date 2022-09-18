import { useState } from "react";
import { SignInContainer, ButtonsContainer } from "./index.styles";
import FormInput from "../form-input";
import Button from "../Button";

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
    // Update fields states with new [name]:value
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("Invalid email!");
          break;
        default:
          console.log(error);
      }
    }
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
          <Button type="submit">Sign In</Button>
          <Button type="button">Google Sign In</Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;

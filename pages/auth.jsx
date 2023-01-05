import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import Image from "next/image";
import { useRouter } from "next/router";

import { registerAndLogin } from "../lib/apiRequest/authRequest";
import { FormInput, Button, Meta, Navbar } from "../components";
import AuthImage from "../assets/404.jpg";

import {
  PageContainer,
  ImageSection,
  FormSection,
  FormContainer,
} from "../pages_styles/auth.styles";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const AuthPage = () => {
  // CONFIGURATION
  const router = useRouter();

  // STATE MANAGEMENT
  const [isSignup, setIsSignup] = useState(true);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, confirmPassword } = formFields;

  // HANDLERS
  const switchMode = () => setIsSignup((preIsSignup) => !preIsSignup);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Signup Case
    if (isSignup) {
      // 1) confirm password , confirmPassword match
      if (password !== confirmPassword) {
        toast.error(
          "password and confirm password are not match, Please try again!"
        );
        return;
      }
      if (!email) {
        toast.error("email is required!");
        return;
      }

      // 2) create userDoc in MongoDB
      const res = await registerAndLogin(formFields, signIn, router);

      if (res.status !== 201) {
        toast.error(`${res.message}`);
      } else if (res.status == 201) toast.success(`${res.message}`);
    } else {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (!res.ok) {
        toast.error(`${res.error}`);
      } else {
        toast.success("Sign in successfully!");
        router.replace("/");
      }
    }

    resetFormFields();
  };

  return (
    <>
      <Meta title="Authentication" />
      <Navbar />
      <PageContainer>
        <ImageSection>
          <Image
            src={AuthImage}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="veeture image"
          />
        </ImageSection>
        <FormSection>
          <FormContainer>
            <h2>{isSignup ? "Create your account" : "Sign in your account"}</h2>
            <span>
              {isSignup
                ? "Sign up with email and password"
                : "Sign in with email and password"}
            </span>
            <form onSubmit={handleSubmit}>
              {isSignup && (
                <FormInput
                  label="Display Name"
                  type="text"
                  required
                  onChange={handleChange}
                  value={name}
                  name="name"
                />
              )}

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
              {isSignup && (
                <FormInput
                  label="Confirm Password"
                  type="password"
                  required
                  onChange={handleChange}
                  value={confirmPassword}
                  name="confirmPassword"
                  minLength="6"
                />
              )}
              <div className="button-group">
                <Button
                  onClick={handleSubmit}
                  width="100%"
                  height="5rem"
                  bgType="solid"
                >
                  {isSignup ? "Sign Up" : "Sign in"}
                </Button>
              </div>
            </form>
            <button className="switch-btn" onClick={switchMode}>
              {isSignup ? "Already have an account ?" : "Create an account"}
            </button>
          </FormContainer>
        </FormSection>
      </PageContainer>
    </>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/account",
        permanent: false,
      },
    };
  }
  return { props: { session } };
};

export default AuthPage;

import React from "react";
import SignInForm from "../../components/sign-in-form";
import SignUpForm from "../../components/sign-up-form";

import { Wrapper, SectionContainer } from "./index.styles";

const AuthPage = () => {
  return (
    <Wrapper>
      <SectionContainer>
        <SignInForm />
        <SignUpForm />
      </SectionContainer>
    </Wrapper>
  );
};

export default AuthPage;

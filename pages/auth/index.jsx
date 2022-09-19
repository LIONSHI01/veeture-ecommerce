import React from "react";
import styled from "styled-components";
import { useSession } from "next-auth/react";
import Router from "next/router";
import SignInForm from "../../components/sign-in-form";
import SignUpForm from "../../components/sign-up-form";

const Wrapper = styled.div`
  min-height: calc(100vh - 10rem - 40rem);
  padding: 10rem 0;
`;

const SectionContainer = styled.div`
  max-width: var(--container);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const AuthPage = () => {
  const { data: session, status } = useSession();

  // Redirect user to account page if already signin
  if (status === "authenticated") Router.replace("/account");

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

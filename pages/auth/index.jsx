import React from "react";
import styled from "styled-components";
import { authOptions } from "../api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

import SignInForm from "../../components/sign-in-form";
import SignUpForm from "../../components/sign-up-form";

const Wrapper = styled.div`
  min-height: calc(100vh - 10rem - 40rem);
  padding: 10rem 0;
`;

const SectionContainer = styled.div`
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 14px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const AuthPage = () => {
  // CONFIGURATION

  return (
    <Wrapper>
      <SectionContainer>
        <SignInForm />
        <SignUpForm />
      </SectionContainer>
    </Wrapper>
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

import React from "react";
import Router from "next/router";
import { getSession, useSession } from "next-auth/react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 10rem - 40rem);

  .container {
    max-width: var(--container);
    margin: 0 auto;
    padding: 0 14px;
  }

  .heading {
    font-size: var(--fs-xl);
  }
`;

const Account = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      Router.push("/auth");
    },
  });

  return (
    <Wrapper>
      <div className="container">
        <div className="heading-box">
          <h1 className="heading">Account Page</h1>
          <h2 className="useremail">{session.user.name}</h2>
        </div>
      </div>
    </Wrapper>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
      },
    };
  }

  return {
    props: { session },
  };
};

export default Account;

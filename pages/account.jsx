import React from "react";
import Router from "next/router";
import { getSession, useSession } from "next-auth/react";

const Account = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      Router.push("/auth");
    },
  });

  if (status === "unauthenticated") return <p>You are unauthenticated</p>;

  return <div>{session.user.email}</div>;
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

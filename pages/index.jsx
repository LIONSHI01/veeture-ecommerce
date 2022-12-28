import React from "react";
import { useSession } from "next-auth/react";
import { Header, Meta, FeatureSection } from "../components";

const Home = () => {
  const session = useSession();
  console.log(session);

  return (
    <>
      <Meta title="Home" />
      <Header />
      <main>
        <FeatureSection />
      </main>
    </>
  );
};

export default Home;

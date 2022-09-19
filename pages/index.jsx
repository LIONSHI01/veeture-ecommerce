import React from "react";
import { useSession } from "next-auth/react";
import FeatureSection from "../components/Feature";
import Header from "../components/Header";

const Home = () => {
  const { data: session, status } = useSession();

  console.log(session);
  return (
    <>
      <Header />
      <main>
        <FeatureSection />
      </main>
      ;
    </>
  );
};

export default Home;

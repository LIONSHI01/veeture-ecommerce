import React from "react";
import { useSession } from "next-auth/react";
import { Header, Meta, FeatureSection, Navbar } from "../components";

const Home = () => {
  return (
    <>
      <Meta title="Home" />
      <Navbar isHomePage={true} />
      <Header />
      <main>
        <FeatureSection />
      </main>
    </>
  );
};

export default Home;

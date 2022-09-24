import React from "react";
import NProgress from "nprogress";
import Router from "next/router";
import Head from "next/head";

import { ToastContainer } from "react-toastify";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CartBar from "../Sidebar/Cart-Sidebar";

const Layout = ({ children }) => {
  Router.onRouteChangeStart = () => NProgress.start();
  Router.onRouteChangeComplete = () => NProgress.done();
  Router.onRouteChangeError = () => NProgress.done();

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <CartBar />
      {children}
      <ToastContainer
        position="bottom-right"
        progressClassName="toastProgress"
        bodyClassName="toastBody"
      />
      <Footer />
    </>
  );
};

export default Layout;

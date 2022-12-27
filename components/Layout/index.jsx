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

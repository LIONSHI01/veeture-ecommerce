import React from "react";
import NProgress from "nprogress";
import Router from "next/router";
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
      <main>{children}</main>
      <ToastContainer
        progressClassName="toastProgress"
        bodyClassName="toastBody"
      />
      <Footer />
    </>
  );
};

export default Layout;

import React from "react";
import NProgress from "nprogress";
import Router from "next/router";

import { Navbar, Footer, CartBar, AuthorDisplayBlock } from "../index";

const Layout = ({ children }) => {
  NProgress.configure({ showSpinner: false });
  Router.onRouteChangeStart = () => NProgress.start();
  Router.onRouteChangeComplete = () => NProgress.done();
  Router.onRouteChangeError = () => NProgress.done();

  return (
    <>
      <Navbar />
      <CartBar />
      {children}
      <Footer />
      <AuthorDisplayBlock />
    </>
  );
};

export default Layout;

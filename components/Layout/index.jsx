import React from "react";
import NProgress from "nprogress";
import Router from "next/router";

import { Footer, CartBar, AuthorDisplayBlock } from "../index";

const Layout = ({ children }) => {
  NProgress.configure({ showSpinner: false });
  Router.onRouteChangeStart = () => NProgress.start();
  Router.onRouteChangeComplete = () => NProgress.done();
  Router.onRouteChangeError = () => NProgress.done();

  return (
    <>
      <CartBar />
      {children}
      <Footer />
      <AuthorDisplayBlock />
    </>
  );
};

export default Layout;

import React from "react";
import NProgress from "nprogress";
import Router, { useRouter } from "next/router";

import { Navbar, Footer, CartBar, AuthorDisplayBlock } from "../index";

const Layout = ({ children }) => {
  NProgress.configure({ showSpinner: false });
  Router.onRouteChangeStart = () => NProgress.start();
  Router.onRouteChangeComplete = () => NProgress.done();
  Router.onRouteChangeError = () => NProgress.done();

  var router = useRouter();
  console.log(router.query);
  return (
    <>
      {/* <Navbar /> */}
      <CartBar />
      {children}
      <Footer />
      <AuthorDisplayBlock />
    </>
  );
};

export default Layout;

import React from "react";
import Link from "next/link";
import Router from "next/router";
import { useSession, signOut } from "next-auth/react";
import { useDispatch } from "react-redux";

import { IoMdClose } from "../ReactIcons";
import { IconButton, Overlay } from "../index";
import { navbarItems } from "../../assets/constants";
import { MobileSidebarContainer } from "./index.styles";

const MobileSidebar = ({ showup, setShowup }) => {
  const dispatch = useDispatch();
  const { status } = useSession();

  // HANLERS
  const closeSidebarHandler = () => {
    setShowup(false);
  };

  const signOutHandler = async () => {
    setShowup(false);
    const data = await signOut({ redirect: false, callbackUrl: "/" });

    // CLEAR ALL STATES
    dispatch({ type: "USER_LOGOUT" });
    Router.push(data.url);
  };

  return (
    <>
      <Overlay showup={showup} setShowup={setShowup} zIndex={9900} />
      <MobileSidebarContainer showup={showup}>
        <div className="closeBtnContainer">
          <IconButton onClick={closeSidebarHandler}>
            <IoMdClose size={30} />
          </IconButton>
        </div>
        {/* {session && (
          <UserInfoBox>
            <p className="username">{username}</p>
          </UserInfoBox>
        )} */}
        <ul className="links">
          {navbarItems.map(({ title, url }) => (
            <li className="item" key={title}>
              <Link href={url}>
                <a className="link" onClick={closeSidebarHandler}>
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="navbar__authentication">
          {status === "unauthenticated" || status === "loading" ? (
            <div className="auth-box">
              <Link href="/auth">
                <a className="link" onClick={closeSidebarHandler}>
                  Sign In
                </a>
              </Link>
              {/* <Link href="/auth">
                <a className="link">Register</a>
              </Link> */}
            </div>
          ) : (
            <div className="accountBox">
              <Link href="/wishlist">
                <a className="link" onClick={closeSidebarHandler}>
                  Wishlist
                </a>
              </Link>
              <Link href="/account">
                <a className="link" onClick={closeSidebarHandler}>
                  Account
                </a>
              </Link>
              <a className="signout-btn" onClick={signOutHandler}>
                Sign Out
              </a>
            </div>
          )}
        </div>
      </MobileSidebarContainer>
    </>
  );
};

export default MobileSidebar;

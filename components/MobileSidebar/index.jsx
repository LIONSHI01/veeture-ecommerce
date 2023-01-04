import React from "react";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";
import { useSession, signOut } from "next-auth/react";
import { useDispatch } from "react-redux";

import {
  IoMdClose,
  BsHeart,
  AiOutlineUser,
  GoSignOut,
  FaUser,
} from "../ReactIcons";
import { IconButton, Overlay } from "../index";
import { SIDE_BAR_ITEMS } from "../../assets/constants";
import {
  MobileSidebarContainer,
  UserInfoBox,
  LinksContainer,
} from "./index.styles";
import bgImage from "../../assets/sidebar-bg.jpg";

const MobileSidebar = ({ showup, setShowup }) => {
  const dispatch = useDispatch();
  const { status, data } = useSession();

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

  const onClickLink = (url) => {
    Router.push(url);
    setShowup(false);
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
        <UserInfoBox>
          <div className="backgroundContainer">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={bgImage}
              alt="bgimage"
              className="background"
            />
          </div>
          {data && (
            <div className="userIconBox">
              <div className="userIcon" />
              <p className="userName">{data?.user?.name?.slice(0, 20)}</p>
            </div>
          )}
        </UserInfoBox>

        <LinksContainer>
          {SIDE_BAR_ITEMS.map(({ title, url, icon }) => (
            <div key={title} className="item" onClick={() => onClickLink(url)}>
              {icon}
              <p className="link">{title}</p>
            </div>
          ))}

          <div className="navbar__authentication">
            {status === "unauthenticated" || status === "loading" ? (
              <div className="item" onClick={() => onClickLink("/auth")}>
                <FaUser />
                <p className="link">Sign In</p>
              </div>
            ) : (
              <div className="accountBox">
                <div className="item" onClick={() => onClickLink("/wishlist")}>
                  <BsHeart />
                  <p className="link">Wishlist</p>
                </div>
                <div className="item" onClick={() => onClickLink("/account")}>
                  <AiOutlineUser />
                  <p className="link">Account</p>
                </div>
                <div className="item" onClick={signOutHandler}>
                  <GoSignOut />
                  <p className="link">Sign Out</p>
                </div>
              </div>
            )}
          </div>
        </LinksContainer>
      </MobileSidebarContainer>
    </>
  );
};

export default MobileSidebar;

import React, { useEffect } from "react";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import styled from "styled-components";
import { getUserProfile } from "../lib/authRequest";
import { setUserProfile, setWishlist } from "../store/user/user.action";
import { setCartList } from "../store/cart/cart.action";

const Wrapper = styled.div`
  min-height: calc(100vh - 10rem - 40rem);

  .container {
    max-width: var(--container);
    margin: 0 auto;
    padding: 0 14px;
  }

  .heading {
    font-size: var(--fs-xl);
  }
`;

const AccountPage = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated: () => {
      Router.push("/auth");
    },
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      const userData = await getUserProfile();
      if (userData) {
        const userWishlist = userData.wishlist;
        const userCartList = userData.cartList;
        dispatch(setCartList(userCartList));
        dispatch(setWishlist(userWishlist));
        dispatch(setUserProfile(userData));
      }
    };
    fetchUserProfile();
  }, []);

  return (
    <Wrapper>
      <div className="container">
        <div className="heading-box">
          <h1 className="heading">Account Page</h1>
          <h2 className="useremail">{session?.user.email}</h2>
        </div>
      </div>
    </Wrapper>
  );
};

export default AccountPage;

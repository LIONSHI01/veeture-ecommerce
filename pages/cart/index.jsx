import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

import getStripe from "../../lib/getStripe";
import { checkoutRequest } from "../../lib/checkoutRequest.utils";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import {
  FaShippingFast,
  SiCashapp,
  AiOutlineLeft,
  AiOutlineRight,
} from "../../components/ReactIcons";

import {
  PageHero,
  CheckoutItem,
  CartWorkFlow,
  LinkButton,
  BUTTON_TYPE_CLASSES,
  Button,
} from "../../components";
import { Wrapper } from "../../pages_styles/cart.styles";

const CartPage = () => {
  const { data: session } = useSession();

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const checkoutHandler = async () => {
    const stripe = await getStripe();
    const res = await checkoutRequest(
      session?.profile?.id,
      cartItems,
      session?.user?.email
    );

    if (res.status === 500) return;

    toast.loading("Redirecting...");
    stripe.redirectToCheckout({ sessionId: res.data.id });
  };

  return (
    <Wrapper>
      <PageHero heading="My Cart" />
      <div className="section-container">
        <CartWorkFlow />

        {cartItems.length >= 1 ? (
          <div className="cart__shopping">
            <div className="cart__title">
              <div className="cart__title-icon-box">
                <FaShippingFast className="cart__title-icon" />
              </div>
              <h4 className="cart__title-text">Cart Items</h4>
            </div>
            <div className="cart__table">
              <div className="cart__table-head">
                <span>Product Name</span>
                <span>Details</span>
                <span>Unit Price</span>
                <span>Quantity</span>
                <span>Sub-Total</span>
                <span>Remove</span>
              </div>
              <div className="cart__table-body">
                {cartItems?.map((product) => (
                  <CheckoutItem
                    key={`${product._id}-${product.selectedSize}`}
                    product={product}
                  />
                ))}
              </div>
              {cartItems?.length >= 1 ? (
                <div className="cart__sum-box">
                  <span>Total</span>
                  <span>{`$ ${cartTotal}`}</span>
                </div>
              ) : (
                <div className="cart__empty-text">
                  {"No Item Yet ! Let's Explore!"}
                </div>
              )}
            </div>
            <p className="testing-reminder">
              *** Please fill in card no. 4242-4242-4242-4242 for testing
              payment fuction in checkout page***
            </p>
            <div className="cart__btns-group">
              {/* <Link href="/">
                <a className="cart__shopping-btn-box">
                  <AiOutlineLeft className="cart__shopping-btn-left" />
                  <span>Shopping</span>
                </a>
              </Link> */}
              <LinkButton
                url="/products"
                buttonType={BUTTON_TYPE_CLASSES.outline}
              >
                <AiOutlineLeft />
                <span>Shopping</span>
              </LinkButton>
              <Button onClick={checkoutHandler}>
                <span>Check Out</span>

                <AiOutlineRight />
              </Button>

              {/* <div onClick={checkoutHandler}>
                <a className="cart__shopping-btn-box">
                  <span>Check Out</span>
                  <SiCashapp />
                  <AiOutlineRight className="cart__shopping-btn-right" />
                </a>
              </div> */}
            </div>
          </div>
        ) : (
          <div className="cart__empty-msg">
            <div className="cart__empty-text">
              {"No Item Yet ! Let's Explore !"}
            </div>
            <Link href="/products">
              <a className="cart__shopping-btn-box">
                <AiOutlineLeft className="cart__shopping-btn-left" />
                <span>Shopping</span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default CartPage;

import React from "react";

import { BsCheckCircleFill } from "../components/ReactIcons";
import { Meta, LinkButton, BUTTON_TYPE_CLASSES } from "../components";
import { Wrapper } from "../pages_styles/success.styles";

const SuccessPage = () => {
  return (
    <>
      <Meta title="Order Success" />

      <Wrapper>
        <div className="container">
          <div className="success">
            <div className="iconBox">
              <BsCheckCircleFill className="icon" />
            </div>
            <h1 className="heading">Order confirmed</h1>
            <p className="msg">
              Your order is confirmed. You will receive an order confirmation
              email shortly.
            </p>
            <div className="btns">
              <LinkButton url="/products">Continue Shopping</LinkButton>
              <LinkButton url="/" buttonType={BUTTON_TYPE_CLASSES.outline}>
                View Order
              </LinkButton>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default SuccessPage;

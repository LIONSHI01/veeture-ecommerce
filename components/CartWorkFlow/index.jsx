import React from "react";

import {
  FaShippingFast,
  AiOutlineFileDone,
  MdSystemSecurityUpdateGood,
} from "../ReactIcons";

import { WorkFlowContainer } from "./index.styles";

const CartWorkFlow = () => {
  return (
    <WorkFlowContainer>
      <div className="cart__flow-step">
        <span className="cart__flow-num">1</span>
        <FaShippingFast className="cart__flow-icon" />
        <span>Choose Shipping Method</span>
      </div>
      <div className="cart__flow-step">
        <span className="cart__flow-num">2</span>
        <AiOutlineFileDone className="cart__flow-icon" />
        <span>Decide Item Quantity</span>
      </div>
      <div className="cart__flow-step">
        <span className="cart__flow-num">3</span>
        <MdSystemSecurityUpdateGood className="cart__flow-icon" />
        <span>Finish Check Out</span>
      </div>
    </WorkFlowContainer>
  );
};

export default CartWorkFlow;

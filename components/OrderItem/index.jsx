import React from "react";

import { OrderItemContainer } from "./index.styles";
import { SingleProductItem } from "../index";

const OrderItem = ({ order }) => {
  const { id, createdAt, paid, paymentValue, orderItems } = order;

  return (
    <OrderItemContainer>
      <div className="header">
        <p className="orderId" title={id}>
          {`Order ID: ${id.slice(0, 8)}...${id.slice(-4)}`}
        </p>
        <span className="createdDate">{createdAt.split("T")[0]}</span>
      </div>

      <div className="productList">
        {orderItems.map((product, i) => (
          <SingleProductItem key={i} product={product} />
        ))}
      </div>

      <div className="bottom">
        <span>Total : ${paymentValue}</span>
        {paid ? (
          <span className="paidText">Paid</span>
        ) : (
          <span className="notPaidText">Pending payment</span>
        )}
      </div>
    </OrderItemContainer>
  );
};

export default OrderItem;

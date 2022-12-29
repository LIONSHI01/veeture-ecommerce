import styled from "styled-components";

export const OrderItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: var(--fs);
  color: var(--black-light);
  border-radius: var(--br-m);
  padding: 2.5rem;
  cursor: pointer;

  :hover {
    background-color: var(--grey-light-2);
    box-shadow: var(--bs-s);
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  .orderId {
    font-weight: 600;
  }

  .createdDate {
  }

  .productList {
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
  }

  .paidText {
    color: var(--green);
  }
  .notPaidText {
    color: var(--red-light);
  }
`;

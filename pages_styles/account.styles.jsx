import styled from "styled-components";

export const Wrapper = styled.div`
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

export const PageHeader = styled.header`
  width: 100%;
  height: 50vh;
  background-color: var(--grey-light-3);
  display: grid;
  align-items: center;

  .heading {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  h1 {
    font-size: var(--fs-mega);
    letter-spacing: -2px;
    font-family: var(--ff-display);
    margin-bottom: var(--mg-x);
  }
  p {
    font-size: var(--fs-m);
    text-transform: capitalize;
  }
`;

export const AccountDetails = styled.div`
  min-height: 30rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 5rem 0;
  padding: 0 10rem;
`;

export const OrderDetails = styled.div`
  h2 {
    font-size: var(--fs-xxl);
  }

  .empty-orders {
    p {
      font-size: var(--fs-xl);
    }
  }
`;

export const AddressDetails = styled.div`
  h2 {
    font-size: var(--fs-xxl);
  }
  form {
    display: flex;
    flex-direction: column;
  }
  .stateAndPostal {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;
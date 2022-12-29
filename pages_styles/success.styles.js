import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: calc(100vh - 40rem);
  padding: 10rem 0;

  .container {
    max-width: var(--container);
    margin: 0 auto;
    padding: 0 14px;
  }
  .success {
    display: flex;
    flex-direction: column;
    align-items: center;

    .iconBox {
      width: 8rem;
      height: 8rem;
      margin-bottom: var(--mg-s);
    }
    .icon {
      color: var(--red);
      width: 6rem;
      height: 6rem;
    }
    .heading {
      font-size: var(--fs-xxl);
      color: var(--green);
      margin-bottom: var(--mg-m);
    }

    .msg {
      text-align: center;
      font-size: var(--fs-x);

      line-height: 1.7;
      color: var(--black-light-2);

      margin-bottom: var(--mg-xl);
    }

    .btns {
      display: flex;
      gap: 3rem;
      text-transform: uppercase;
      font-size: var(--fs-x);
    }
  }
`;

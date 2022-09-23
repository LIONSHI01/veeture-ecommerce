import styled from "styled-components";

export const ProductGroup = styled.div`
  min-height: calc(100vh - 10rem - 40rem);
  .heading {
    width: 100%;
    min-height: 50vh;
    background-color: var(--grey-light-3);
    display: grid;
    /* margin-bottom: var(--mg-xl); */
    align-items: center;

    h1 {
      font-family: var(--ff-display);
      font-size: var(--fs-mega);
      letter-spacing: -2px;
      text-transform: capitalize;

      text-align: center;
    }
  }
  .group-container {
    max-width: var(--container);
    margin: 0 auto;
    padding: 0 14px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ProductMain = styled.div`
  grid-column: 1 / -1;

  .section-container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;

    .filter-btn {
      display: flex;
      align-items: center;
      justify-self: start;

      gap: 1rem;
      border: 1px solid var(--black-light-3);
      padding: 1rem 1rem;
      border-radius: var(--br-s);
      background-color: var(--var);

      margin-bottom: var(--mg-x);
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background-color: var(--black-light-3);
      }

      span {
        font-size: var(--fs-x);
      }
    }
    .filter-icon {
      width: 3rem;
      height: 3rem;
    }

    .gallary {
      margin: 10rem 0;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
      gap: 3rem;
    }

    .not-found {
      display: grid;

      width: 100%;
      height: 20rem;
      align-items: center;
      justify-items: center;
      margin: 10rem 0;

      p {
        font-size: var(--fs-xl);
        font-weight: 600;
        text-align: center;
        text-transform: capitalize;
      }
    }
  }
`;

export const Unauthentication = styled.div`
  margin: 10rem 0;
  min-height: calc(100vh - 10rem - 40rem);

  .section-container {
    max-width: var(--container);
    height: 50rem;
    margin: 0 auto;
    padding: 14px;

    .unauthenticate-box {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;

      p {
        font-size: var(--fs-xl);
        margin-bottom: var(--mg-x);
      }
    }
  }
`;

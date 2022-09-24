import styled from "styled-components";

export const ProductGroup = styled.div`
  min-height: calc(100vh - 10rem - 40rem);
  margin-bottom: 10rem;

  .hero-section {
    position: relative;

    p {
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translateX(-50%);
      font-size: var(--fs-xxl);
      text-align: center;
      text-transform: capitalize;
    }
    span {
      font-weight: 600;
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
  margin-top: 10rem;

  .section-container {
    /* max-width: var(--container); */
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
      height: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
      justify-items: flex-start;
      column-gap: 3rem;
      row-gap: 10rem;
      margin-bottom: 5rem;
    }

    .not-found {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;

      p {
        font-size: var(--fs-xl);
        font-weight: 600;
        text-align: center;
        text-transform: capitalize;
        margin-bottom: var(--mg-x);
      }
    }
    .btn-group {
      justify-self: center;
    }
  }
`;

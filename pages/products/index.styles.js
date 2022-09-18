import styled from "styled-components";

export const ProductMain = styled.div`
  margin: 10rem 0;
  min-height: calc(100vh - 10rem - 40rem);

  .section-container {
    max-width: var(--container);
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
      gap: 3rem;
    }

    .not-found {
      display: block;
      font-size: var(--fs-xl);
      font-weight: 600;
      text-align: center;
    }
  }
`;

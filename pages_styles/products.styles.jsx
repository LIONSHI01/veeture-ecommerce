import styled from "styled-components";

export const ProductGroup = styled.div`
  margin: 5rem 0 10rem 0;
  min-height: calc(100vh - 10rem - 40rem);
  .group-container {
    max-width: var(--container-x);
    margin: 0 auto;
    padding: 0 14px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .sidebar-container {
    grid-column: 1 / span 1;
    margin-right: 8rem;
  }
`;

export const ProductMain = styled.div`
  grid-column: 2 / -1;

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
      }
    }
  }
`;

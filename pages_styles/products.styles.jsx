import styled from "styled-components";
import { device } from "./device";

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
  .header-container {
    grid-column: 1 / -1;
    display: flex;
    justify-content: space-between;
  }
  .sidebar-container {
    grid-column: 1 / span 1;
    margin-right: 8rem;

    @media ${device.tablet} {
      display: none;
    }
  }

  .filter-btn {
    /* display: none; */
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    span {
      font-size: var(--fs);
    }

    @media ${device.tablet} {
      display: flex;
    }
  }

  .button-cion {
    height: 2rem;
    width: 2rem;
  }
`;

export const ProductMain = styled.div`
  grid-column: 2 / -1;

  .section-container {
    /* max-width: var(--container); */
    width: 100%;
    height: 100%;
    margin: 0 auto;
    /* display: grid;
    grid-template-columns: 1fr; */

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

export const MasterContainer = styled.div`
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 14px;
`;

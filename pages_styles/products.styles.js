import styled from "styled-components";
import { device } from "../styles/devices";

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

  .filter-btn {
    display: none;
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
  display: flex;

  @media ${device.tablet} {
    grid-column: 1 / -1;
  }
`;

export const MasterContainer = styled.div`
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 14px;

  .sidebar-container {
    grid-column: 1 / span 1;
    margin-right: 8rem;

    @media ${device.tablet} {
      display: none;
    }
  }
`;

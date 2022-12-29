import styled from "styled-components";
// import { device } from "../../styles/devices";

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, auto));
  justify-items: center;

  column-gap: 3rem;
  row-gap: 5rem;

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
`;

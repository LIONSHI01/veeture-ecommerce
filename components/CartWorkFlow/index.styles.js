import styled from "styled-components";
import { device } from "../../styles/devices";

export const WorkFlowContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  font-size: var(--fs-x);
  font-weight: 500;
  text-transform: uppercase;
  background-color: var(--grey-light-1);
  color: var(--black-light-2);
  border-radius: var(--br-m);
  margin: var(--mg-x) 0;

  @media ${device.tablet} {
    flex-direction: column;
    gap: 1rem;
  }

  .cart__flow-step {
    position: relative;
    display: flex;
    align-items: center;

    gap: 1.5rem;
    padding: 1rem 7rem 1rem 1rem;
  }

  .cart__flow-num {
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--white);
    border-radius: 100%;
    padding: 1rem;
  }
  .cart__flow-icon {
    width: 3rem;
    height: 3rem;
  }
`;

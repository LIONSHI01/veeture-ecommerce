import styled from "styled-components";
export const Wrapper = styled.div`
  & .heading-container {
    max-width: var(--container);
    margin: 0 auto;
    padding-top: 3rem;

    h1 {
      font-size: var(--fs-xl);
      text-transform: uppercase;
      line-height: 0;
      margin: 2rem 0;
    }
    & span {
      font-size: var(--fs);
      color: var(--black-light-3);
    }
  }
`;

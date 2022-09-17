import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 10rem 0;
  .section-container {
    max-width: var(--container);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));

    gap: 3rem;
  }
`;

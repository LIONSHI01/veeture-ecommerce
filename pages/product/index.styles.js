import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 5rem 0;

  .product-details-container {
    max-width: var(--container);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .image-section {
    grid-column: 1 / span 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(45rem, max-content));
    gap: 2rem;
  }

  .details-section {
    grid-column: 3 / -1;
  }
`;

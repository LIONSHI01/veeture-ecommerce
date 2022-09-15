import styled from "styled-components";

export const StyledFeature = styled.section`
  margin: 10rem 0;

  h2 {
    font-size: var(--fs-xxl);
    text-transform: uppercase;
    letter-spacing: -1px;
  }
  .feature-container {
    max-width: var(--container);
    margin: 0 auto;
  }

  .feature-images {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .card {
    width: 45rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: right;

    cursor: pointer;

    span {
      text-transform: uppercase;
      font-size: var(--fs-xl);
      font-weight: 500;
      line-height: 1.2;
    }
  }

  .feature-image {
    width: 100%;
    height: auto;
  }
`;

import styled from "styled-components";

export const Wrapper = styled.section`
  .product-infos {
    display: flex;
    flex-direction: column;

    margin-bottom: var(--mg-m);

    h2 {
      font-size: var(--fs-xxl);
      text-transform: uppercase;
      font-weight: 700;
      line-height: 1;
      font-family: var(--ff-display);
      margin-bottom: var(--mg-s);
    }
    p {
      font-size: var(--fs);
      color: var(--black-light-2);
      text-transform: capitalize;
    }
    span {
      margin-top: var(--mg-m);
      font-size: var(--fs-xl);
    }
  }

  .purchase-terms {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 3rem 0;
    border-bottom: 2px solid var(--black-light-3);

    p {
      font-size: var(--fs-s);
    }
  }
  .term {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .icon {
    width: 2rem;
    height: 2rem;
  }
  .notes {
  }
`;

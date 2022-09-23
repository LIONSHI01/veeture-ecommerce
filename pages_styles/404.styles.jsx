import styled from "styled-components";

export const PageWrapper = styled.main`
  min-height: calc(100vh - 50rem);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
`;

export const LinkSection = styled.section`
  display: grid;
  align-items: center;
  padding: 0 10rem;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    & > :last-child {
      align-self: self-start;
    }

    h1 {
      font-size: 20rem;
      font-family: var(--ff-display);
      text-align: center;
    }
    p {
      /* display: block;
      width: 50%; */
      font-size: var(--fs-x);
      line-height: 1.7;
      margin-bottom: var(--mg-s);
    }
  }

  .links {
    align-self: flex-start;

    h2 {
      font-size: var(--fs-xl);
      font-weight: 600;
      margin-bottom: var(--mg-m);
    }
    ul {
      display: grid;
      gap: 2.5rem;
    }
    li {
      font-size: var(--fs-x);
      text-transform: uppercase;
    }
    span {
      font-weight: 700;
    }

    .link {
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: translateX(10px);
      }
    }
  }
`;
export const ImageSection = styled.section`
  line-height: 0;
`;

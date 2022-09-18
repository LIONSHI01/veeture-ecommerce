import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: calc(100vh - 10rem - 40rem);
  padding: 10rem 0;
`;

export const SectionContainer = styled.div`
  max-width: var(--container);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
    font-size: var(--fs-xl);
    font-weight: 600;
  }

  span {
    font-size: var(--fs);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

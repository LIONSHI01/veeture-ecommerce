import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;

  .switch-btn {
    border: none;
    background-color: transparent;
    font-size: var(--fs-x);
    align-self: flex-end;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: var(--black-light-2);
    }
  }

  form {
    margin-bottom: var(--mg-m);
  }

  h2 {
    margin: 10px 0;
    font-size: var(--fs-xxl);
    font-weight: 600;
    font-family: var(--ff-display);
  }

  span {
    font-size: var(--fs);
  }
`;

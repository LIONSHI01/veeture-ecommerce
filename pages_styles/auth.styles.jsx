import styled from "styled-components";
export const PageContainer = styled.div`
  min-height: calc(100vh - 10rem - 40rem);

  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const FormSection = styled.div`
  margin: 0 auto;
  padding: 0 14px;
  display: grid;
  align-items: center;
`;

export const ImageSection = styled.div`
  line-height: 0;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;

  .switch-btn {
    position: relative;
    overflow: hidden;
    border: none;
    background-color: transparent;
    font-size: var(--fs-x);
    align-self: flex-end;
    cursor: pointer;
    transition: all 0.3s;
    padding: 5px 0;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: var(--black);
      transform: translateX(100%);
      transition: all 0.3s;
    }
    /* border-bottom: 2px solid var(--black); */

    &:hover {
      color: var(--black-light-2);
    }
  }

  .switch-btn:hover.switch-btn::after {
    transform: translateX(0);
  }

  .button-group {
    display: grid;
    gap: 2rem;
  }

  form {
    margin-bottom: var(--mg-m);
  }

  h2 {
    margin: 10px 0;
    font-size: var(--fs-xxl);
    font-weight: 600;
    font-family: var(--ff-display);
    text-transform: capitalize;
  }

  span {
    font-size: var(--fs);
  }
`;

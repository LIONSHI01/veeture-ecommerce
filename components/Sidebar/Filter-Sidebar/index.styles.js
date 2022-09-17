import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 40rem;
  padding: 5rem 3rem;
  background-color: var(--white);
  z-index: 100;

  .filter-form {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .input-field {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-bottom: 2px solid var(--black-light-3);
    padding: 2rem 0;
  }

  .title-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  .title {
    font-size: var(--fs-x);
    text-transform: uppercase;
    font-weight: 500;
  }

  .icon {
    height: 2.5rem;
    width: 2.5rem;
    transition: all 0.3s;
  }

  .icon.active {
    transform: rotate(-45deg);
  }

  /* Expand/Collapse field */
  .options-field {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    max-height: 0;
    opacity: 0;
    overflow-y: hidden;
    transition: all 0.5s ease-in-out;
  }
  .options-field.active {
    padding-top: 2rem;
    opacity: 1;
    height: auto;
    max-height: 999px;
    transition: all 0.5s cubic-bezier(0.86, -0.06, 0.25, 1.08);
  }

  .input-box {
    display: flex;
    gap: 0.5rem;
  }

  .input {
    width: 2rem;
    height: 2rem;
  }

  .label {
    font-size: var(--fs);
    text-transform: capitalize;
  }
`;

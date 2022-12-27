import styled from "styled-components";

export const ButtonWrapper = styled.button`
  border: none;
  background-color: transparent;
  border-radius: 100px;
  transition: all 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  &:hover {
    background-color: var(--black-light-3);
  }

  &:active {
    scale: 0.85;
  }
`;

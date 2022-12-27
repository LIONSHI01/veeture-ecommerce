import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, auto));
  gap: 2rem;
  margin: 3rem 0;

  button {
    padding: 1.5rem 0;
    font-size: var(--fs-x);
    background-color: transparent;
    border: 2px solid var(--black-light-3);
    border-radius: var(--br-m);
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      background-color: var(--grey-light-2);
    }
  }

  button.active {
    border: 2px solid var(--black);
  }
`;

const SizesContainer = ({ sizes, setSize }) => {
  const [selected, setSelected] = useState(null);

  const toggleHandler = (i, size) => {
    if (selected === i) setSelected(null);
    setSelected(i);
    setSize(size);
  };

  return (
    <Wrapper>
      {sizes?.map((size, i) => (
        <button
          className={selected === i ? "active" : ""}
          key={i}
          onClick={() => toggleHandler(i, size)}
        >{`EU ${size}`}</button>
      ))}
    </Wrapper>
  );
};

export default SizesContainer;

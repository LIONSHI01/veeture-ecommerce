import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 3rem 0;

  button {
    padding: 1.5rem 0;
    font-size: var(--fs-x);
    background-color: transparent;
    border: 2px solid var(--black-light-3);
    border-radius: var(--br-m);
    cursor: pointer;

    &:active {
    }
  }

  button.active {
    border: 2px solid var(--black);
  }
`;

const SizesContainer = ({ sizes }) => {
  const [selected, setSelected] = useState(null);

  const toggleHandler = (i) => {
    if (selected === i) setSelected(null);
    setSelected(i);
    console.log(selected);
  };

  return (
    <Wrapper>
      {sizes.map((size, i) => (
        <button
          className={selected === i ? "active" : ""}
          key={i}
          onClick={() => toggleHandler(i)}
        >{`EU ${size}`}</button>
      ))}
    </Wrapper>
  );
};

export default SizesContainer;

import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";

const data = [
  {
    question: "Designer Note",
    answer:
      "Veeture's Jiro Suo Taupe high loafers for men complete your wardrobe with their understated elegance and perfect shade, which we see a lot in the street scene. This item is great to combine with both casual, bohemian, and business outfits.",
  },
  {
    question: "Delivery",
    answer:
      "Orders that are completed on weekdays will be delivered free of charge within 1 - 3 days within Europe.You can find more information about ordering and delivery here",
  },
  {
    question: "Exchange and return",
    answer:
      "The return policy of Nubikk allows you to return the product free of charge * within 30 days after receipt. More information about exchanges and returns can be found.",
  },
];

const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 2px solid var(--black-light-3);

  .item {
    margin-bottom: 5px;
    padding: 1rem 0;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--fs-x);
    line-height: 0;
    text-transform: uppercase;
    cursor: pointer;

    h4 {
      font-weight: 500;
    }
  }

  .icon {
    width: 3rem;
    height: 3rem;
    transition: all 0.7s cubic-bezier(0.86, -0.06, 0.25, 1.08);
  }

  .icon.select {
    transform: rotate(180deg);
  }

  .content {
    font-size: var(--fs-s);
    line-height: 1.7;
    transform: translateY(1rem);
    max-height: 0;
    opacity: 0;
    overflow-y: hidden;
    transition: all 0.7s cubic-bezier(0.86, -0.06, 0.25, 1.08);
  }

  .content.show {
    opacity: 1;
    height: auto;
    max-height: 999px;
    transition: all 0.7s cubic-bezier(0.86, -0.06, 0.25, 1.08);
  }
`;

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <Wrapper>
      {data.map((item, i) => (
        <div key={i} className="item">
          <div className="title" onClick={() => toggle(i)}>
            <h4>{item.question}</h4>
            <MdKeyboardArrowDown
              className={selected === i ? "icon select" : "icon"}
            />
          </div>
          <div className={selected === i ? "content show" : "content"}>
            {item.answer}
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default Accordion;

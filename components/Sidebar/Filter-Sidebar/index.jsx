import React, { useState } from "react";

import { AiOutlinePlus } from "react-icons/ai";

import { Wrapper } from "./index.styles";

const filterFormData = [
  {
    title: "gender",
    options: ["men", "women"],
  },
  {
    title: "category",
    options: ["derby", "boots", "ankle boots", "sneakers", "bag", "clothing"],
  },
  {
    title: "price",
    options: [200, 300, 400, 500, 600],
  },
  {
    title: "size",
    options: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
  },
];

// const INITIAL_FORM_FIELD = {};

const FilterSidebar = () => {
  const [selected, setSelected] = useState(null);
  const [formField, setFormField] = useState({});

  const openHandler = (i) => {
    if (i === selected) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <Wrapper>
      <form className="filter-form">
        {filterFormData.map(({ title, options }, i) => (
          <div key={i} className="input-field">
            <div className="title-box" onClick={() => openHandler(i)}>
              <h4 className="title">{title}</h4>
              <AiOutlinePlus
                className={selected === i ? "icon active" : "icon"}
              />
            </div>
            <div
              className={
                selected === i ? "options-field active" : "options-field"
              }
            >
              {options.map((option, optIndex) => (
                <div key={optIndex} className="input-box">
                  <input
                    type="checkbox"
                    className="input"
                    id={option}
                    name={option}
                    value={option}
                  />
                  <label htmlFor="OPTION NAME" className="label">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </form>
    </Wrapper>
  );
};

export default FilterSidebar;

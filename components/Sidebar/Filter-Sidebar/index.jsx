import React, { useState } from "react";

import { AiOutlinePlus } from "react-icons/ai";

import { Wrapper } from "./index.styles";
import Overlay from "../../Overlay";
import Button from "../../Button";

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

const INITIAL_FORM_FIELD = {
  gender: [],
  category: [],
  price: [],
  size: [],
};

const FilterSidebar = ({ filterState, setFilterState }) => {
  const [selected, setSelected] = useState(null);
  const [formField, setFormField] = useState(INITIAL_FORM_FIELD);

  const openHandler = (i) => {
    if (i === selected) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    if (e.target.checked) {
      const newFormField = {
        ...formField,
        [name]: [...formField[name], value],
      };
      setFormField(newFormField);
    } else {
      const newFormField = {
        ...formField,
        [name]: [...formField[name].filter((val) => val !== value)],
      };
      setFormField(newFormField);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formField);
  };

  const onResetHandler = () => {
    setFormField(INITIAL_FORM_FIELD);
  };

  return (
    <>
      <Wrapper filterState={filterState} onSubmit={onSubmitHandler}>
        <form id="filter-form" className="filter-form">
          <div className="form-content">
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
                        // id={option}
                        name={`${title}`}
                        value={option}
                        onChange={onChangeHandler}
                      />
                      <label htmlFor={title} className="label">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="btn-group">
            <Button type="submit" bgType="solid" height="5rem" width="100%">
              Search
            </Button>
            <Button
              type="reset"
              height="5rem"
              width="100%"
              onClick={onResetHandler}
            >
              Reset
            </Button>
          </div>
        </form>
      </Wrapper>
      <Overlay state={filterState} onClick={() => setFilterState(false)} />
    </>
  );
};

export default FilterSidebar;

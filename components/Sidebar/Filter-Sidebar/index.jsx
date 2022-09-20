import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setFilterConds } from "../../../store/product/product.actions";
import { selectFilterConditions } from "../../../store/product/product.selector";
import { AiOutlinePlus } from "react-icons/ai";

import { Wrapper } from "./index.styles";

import Button from "../../Button";

const filterFormData = [
  {
    title: "gender",
    options: ["men", "women"],
  },
  {
    title: "category",
    options: ["derby", "boots", "ankle-boots", "sneakers", "bag", "clothing"],
  },
  {
    title: "price",
    options: [100, 200, 300, 400, 500, 600],
  },
  {
    title: "sizes",
    options: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
  },
  {
    title: "clothing",
    options: ["S", "M", "X", "XL"],
  },
];

const INITIAL_FORM_FIELD = {
  gender: [],
  category: [],
  price: [],
  sizes: [],
  clothing: [],
};

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const filterConds = useSelector(selectFilterConditions);
  const [selected, setSelected] = useState(null);

  const openHandler = (i) => {
    if (i === selected) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    if (e.target.checked) {
      const newFilterConds = {
        ...filterConds,
        [name]: [...filterConds[name], value],
      };

      dispatch(setFilterConds(newFilterConds));
    } else {
      const newFilterConds = {
        ...filterConds,
        [name]: [...filterConds[name].filter((val) => val !== value)],
      };

      dispatch(setFilterConds(newFilterConds));
    }
  };

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();

  //   setFilterState(false);
  // };

  const onResetHandler = () => {
    dispatch(setFilterConds(INITIAL_FORM_FIELD));
  };

  return (
    <>
      <Wrapper>
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
            {/* <Button type="submit" bgType="solid" height="5rem" width="100%">
              Search
            </Button> */}
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
    </>
  );
};

export default FilterSidebar;

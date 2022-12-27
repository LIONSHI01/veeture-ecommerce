import React from "react";

import { IoMdClose } from "../ReactIcons";
import { FilterBar, IconButton, Overlay } from "../index";
import { FilterSidebarContainer } from "./index.styles";

const FilterSidebar = ({ showup, setShowup }) => {
  const closeSidebarHandler = () => {
    setShowup(false);
  };

  return (
    <>
      <FilterSidebarContainer showup={showup}>
        <div className="closeBtnContainer">
          <IconButton onClick={closeSidebarHandler}>
            <IoMdClose size={30} />
          </IconButton>
        </div>
        <div className="content-container">
          <FilterBar />
        </div>
      </FilterSidebarContainer>
      <Overlay showup={showup} setShowup={setShowup} />
    </>
  );
};

export default FilterSidebar;

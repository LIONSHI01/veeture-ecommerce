import React from "react";

import { OverlayWrapper } from "./index.styles";

const Overlay = ({ showup, setShowup, zIndex = 999 }) => {
  return (
    <OverlayWrapper
      zIndex={zIndex}
      showup={showup}
      onClick={() => setShowup(false)}
    />
  );
};

export default Overlay;

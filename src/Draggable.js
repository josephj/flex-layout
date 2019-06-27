import isTouchSupported from "is-touch-device";
import React from "react";

import { Cell } from "./Styles";
import DragPreview from "./DragPreview";

const Draggable = props => {
  const { children, isDragging, ...otherProps } = props;

  return (
    <div
      draggable
      className="source"
      style={{
        width: "178px",
        height: "119px",
        display: isTouchSupported() ? "inline-block" : "block",
        marginRight: isTouchSupported() ? "4px" : "0",
        opacity: isDragging ? 0.5 : 1
      }}
    >
      <Cell {...otherProps}>
        <DragPreview {...props} />
        {children}
      </Cell>
    </div>
  );
};

export default Draggable;

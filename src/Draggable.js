import isTouchSupported from "is-touch-device";
import React from "react";
import { DragSource } from "react-dnd";

import { Cell } from "./Styles";
import DragPreview from "./DragPreview";

const Draggable = props => {
  const { children, isDragging, connectDragSource, ...otherProps } = props;

  return connectDragSource(
    <div
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

const dragSource = {
  beginDrag(props) {
    return props;
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

export default DragSource("draggable-item", dragSource, collect)(Draggable);

import React, { useEffect, useState, useRef } from "react";
import { Cell } from "./Styles";

const Draggable = ({ children, ...otherProps }) => {
  const ref = useRef();
  const [isDraggable, setIsDraggable] = useState(false);
  let touchTimer = null;
  const handleTouchStart = () => {
    touchTimer = setTimeout(() => {
      setIsDraggable(true);
    }, 1000);
  };
  const handleTouchEnd = () => {
    if (touchTimer) {
      clearTimeout(touchTimer);
      setIsDraggable(false);
    }
  };

  useEffect(() => {
    const el = ref.current;
    el.addEventListener("touchstart", handleTouchStart);
    el.addEventListener("touchend", handleTouchEnd);

    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <Cell ref={ref} draggable={isDraggable} {...otherProps}>
      {children}
    </Cell>
  );
};

export default Draggable;

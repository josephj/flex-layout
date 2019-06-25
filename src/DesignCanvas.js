import React, { useEffect, useRef } from "react";
import { Box } from "rebass";
import CurrentWidth from "./CurrentWidth";

export default function DesignCanvas() {
  const droppableRef = useRef();
  useEffect(() => {
    const droppableEl = droppableRef.current;
    droppableEl.addEventListener("dragenter", () => {
      droppableEl.style.backgroundColor = "mango";
    });
    droppableEl.addEventListener("dragleave", () => {
      droppableEl.style.backgroundColor = "orange";
    });
  }, []);

  return (
    <Box bg="gray" flex={2} p={2}>
      <CurrentWidth>
        {(currentWidth, currentHeight) => (
          <>
            <span>{currentWidth}</span>
            <span>x</span>
            <span>{currentHeight}</span>
          </>
        )}
      </CurrentWidth>
      <Box
        ref={droppableRef}
        bg="orange"
        width={1}
        p={5}
        style={{ height: "50%" }}
      >
        DropZone
      </Box>
    </Box>
  );
}

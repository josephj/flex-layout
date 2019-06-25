import React, { useEffect, useRef } from "react";
import { Box } from "rebass";
import CurrentWidth from "./CurrentWidth";
import { Droppable } from "@shopify/draggable";

export default function DesignCanvas() {
  const wrapperRef = useRef();
  useEffect(() => {
    const dropzoneEl = wrapperRef.current;
    console.log(dropzoneEl);
    const droppable = new Droppable(dropzoneEl, {
      draggable: ".draggable-source",
      dropzone: ".dropzone"
    });
    droppable.on("droppable:dropped", () => {
      console.log("droppable:dropped");
      dropzoneEl.style.backgroundColor = "mango";
      alert("hihi");
    });
    droppable.on("droppable:returned", () => {
      console.log("droppable:returned");
      alert("hihi");
      dropzoneEl.style.backgroundColor = "orange";
    });
    return () => {
      droppable.off();
    };
  }, []);

  return (
    <Box bg="gray" flex={2} p={2} ref={wrapperRef}>
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
        dropzone
        className="dropzone"
        bg="orange"
        width={1}
        style={{ height: "50%" }}
      >
        DropZone
      </Box>
    </Box>
  );
}

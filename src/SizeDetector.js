import { Box, Text } from "rebass";
import React, { useState, useEffect } from "react";
import { watchViewport, unwatchViewport } from "tornis";

export default function SizeDetector() {
  const [viewportSize, setViewportSize] = useState({ x: 0, y: 0 });
  const handleViewportUpdate = state => {
    setViewportSize(state.size);
  };
  useEffect(() => {
    watchViewport(handleViewportUpdate);
    return () => {
      unwatchViewport(handleViewportUpdate);
    };
  }, []);

  return (
    <Box
      style={{
        position: "absolute",
        right: "10px",
        top: "10px",
        whiteSpace: "nowrap",
        width: "60px",
        fontSize: "12px"
      }}
    >
      <Text
        bg="magenta"
        style={{ borderRadius: "4px", display: "inline-block" }}
      >
        {viewportSize.x}
      </Text>
      x
      <Text
        bg="magenta"
        style={{ borderRadius: "4px", display: "inline-block" }}
      >
        {viewportSize.y}
      </Text>
    </Box>
  );
}

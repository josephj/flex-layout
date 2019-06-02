import React, { useState, useEffect } from "react";
import { Flex, Box, Text } from "rebass";
import MediaQuery from "react-responsive";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { watchViewport, unwatchViewport, getViewportState } from "tornis";

function App() {
  const [viewportSize, setViewportSize] = useState({ x: 0, y: 0 });
  const handleViewportUpdate = state => {
    console.log("handleViewportUpdate", state);
    setViewportSize(state.size);
  };

  useEffect(() => {
    // const state = getViewportState();
    // console.log("useEffect", state.size);
    // setViewportSize(state.size);

    watchViewport(handleViewportUpdate);
    return () => {
      unwatchViewport(handleViewportUpdate);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <>
        <Flex flexDirection="column" style={{ height: "100%" }}>
          <Flex bg="blue" alignItems="center" p={3}>
            Header
          </Flex>
          <Flex flex={2} flexDirection={["column-reverse", "row"]}>
            <Box
              bg="orange"
              p={2}
              width={[1, 350]}
              style={{ whiteSpace: "nowrap", overflow: "auto" }}
            >
              <img
                src="https://c1.staticflickr.com/9/8387/8638813125_3cac0dc01c_n.jpg"
                width="174"
                alt="parrot"
                style={{ marginRight: "1px" }}
              />
              <img
                src="https://c1.staticflickr.com/9/8387/8638813125_3cac0dc01c_n.jpg"
                width="174"
                alt="parrot"
                style={{ marginRight: "1px" }}
              />
              <img
                src="https://c1.staticflickr.com/9/8387/8638813125_3cac0dc01c_n.jpg"
                width="174"
                alt="parrot"
                style={{ marginRight: "1px" }}
              />
            </Box>
            <Box bg="gray" flex={2} p={2}>
              Design Canvas
            </Box>
            <MediaQuery query={`(min-width: ${theme.breakpoints[0]})`}>
              <Box bg="purple" p={2} width={40}>
                Toolbar
              </Box>
            </MediaQuery>
          </Flex>
        </Flex>
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
      </>
    </ThemeProvider>
  );
}

export default App;

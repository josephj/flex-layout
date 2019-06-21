import React, { useState, useEffect } from "react";
import { Card, Flex, Box, Text } from "rebass";
import MediaQuery from "react-responsive";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import { watchViewport, unwatchViewport } from "tornis";
import CurrentWidth from './CurrentWidth';
import {polyfill} from "mobile-drag-drop";
import {scrollBehaviourDragImageTranslateOverride} from "mobile-drag-drop/scroll-behaviour";
import  { ReactComponent as Logo } from './logo.svg';

// options are optional ;)
polyfill({
    // use this to make use of the scroll behaviour
    dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride
});

const DesignCanvas = () => (
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
  </Box>
)

function App() {
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
    <ThemeProvider theme={theme}>
      <>
        <Flex flexDirection="column" style={{ height: "100%" }}>
          <Flex bg="blue" alignItems="center" p={3}>
            Header
          </Flex>
          <Flex flex={2} flexDirection={["column-reverse", "row"]}>
            <Flex flexDirection={["column", "row-reverse"]} width={[1, 320]}>
              <Box
                bg="orange"
                p={2}
                width={[1, 200]}
                style={{ whiteSpace: "nowrap", overflow: "auto" }}
                alingItems="center"
                flexWrap="nowrap"
              >
                <Card draggable bg="yellow" mr={[1, 0]} mb={[0, 1]} width={['174px', 1]} style={{height: '115px', display: 'inline-block'}}>
                </Card>
                <Card draggable bg="red" mr={[1, 0]} mb={[0, 1]} width={['174px', 1]} style={{height: '115px', display: 'inline-block'}}>
                  <Logo/>
                </Card>
                <PhotoCard>
                  <img
                    src="https://c1.staticflickr.com/9/8387/8638813125_3cac0dc01c_n.jpg"
                    width="174"
                    height="115"
                    alt="parrot"
                  />
                </PhotoCard>
                <PhotoCard draggable>
                  <img
                    src="https://c1.staticflickr.com/9/8387/8638813125_3cac0dc01c_n.jpg"
                    width="174"
                    height="115"
                    alt="parrot"
                    style={{border: '2px solid green', boxSizing: 'border-box'}}
                  />
                </PhotoCard>
                <PhotoCard>
                  <img
                    src="https://c1.staticflickr.com/9/8387/8638813125_3cac0dc01c_n.jpg"
                    width="174"
                    height="115"
                    alt="parrot"
                  />
                </PhotoCard>
                <PhotoCard style={{display: 'inline-block'}} mr={1} width={['auto', 1]}>
                  <img
                    src="https://c1.staticflickr.com/9/8387/8638813125_3cac0dc01c_n.jpg"
                    width="174"
                    height="115"
                    alt="parrot"
                  />
                </PhotoCard>
              </Box>
              <Flex
                bg="pink"
                p={2}
                width={[1, 120]}
                style={{ whiteSpace: "nowrap", overflow: "auto" }}
                flexDirection={["row", "column"]}
                justifyContent="flex-start"
              >
                <Card width={[1/4, 1]} alignItems="center" bg="red" borderRadius={3} mr={1} mb={[0, 1]} p={2} style={{height: '50px', textAlign: "center" }}>Photos</Card>
                <Card width={[1/4, 1]} bg="red" borderRadius={3} mr={1} mb={[0, 1]} p={2} style={{height: '50px', textAlign: "center"}}>Backgrounds</Card>
                <Card width={[1/4, 1]} bg="red" borderRadius={3} mr={1} mb={[0, 1]} p={2} style={{height: '50px', textAlign: "center"}}>Layouts</Card>
                <Card width={[1/4, 1]} bg="red" borderRadius={3} p={2} style={{height: '50px', textAlign: "center"}}>Text</Card>
              </Flex>
            </Flex>
            <DesignCanvas/>
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

const PhotoCard = styled(Card).attrs({
  mr: [1, 0],
  mb: [0, 1],
  width: ['auto', 1]
})`
  height: 115px;
  ${props => `
    img {
      width: 100%;
    }
    @media (max-width: ${props.theme.breakpoints[0]}) {
      display: inline-block;
      img {
        width: 174px;
      }
    }
  `}
`;

export default App;

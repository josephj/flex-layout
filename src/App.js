import { times } from "lodash";
import React from "react";
import MediaQuery from "react-responsive";
import { Box } from "rebass";
import { ThemeProvider } from "styled-components";
import { polyfill } from "mobile-drag-drop";
import { scrollBehaviourDragImageTranslateOverride } from "mobile-drag-drop/scroll-behaviour";
import "mobile-drag-drop/default.css";

import theme from "./theme";
import { ReactComponent as Logo } from "./logo.svg";
import SizeDetector from "./SizeDetector";
import DesignCanvas from "./DesignCanvas";
import Draggable from "./Draggable";
import useDisableScaling from "./useDisableScaling";
import {
  Grid,
  Header,
  Body,
  Nav,
  NavMain,
  NavSub,
  NavItem,
  SampleImage
} from "./Styles";

polyfill({
  holdToDrag: 200,
  dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride
});

function App() {
  useDisableScaling();

  return (
    <ThemeProvider theme={theme}>
      <>
        <Grid>
          <Header>Header</Header>
          <Body>
            <Nav>
              <NavSub>
                <Box width={1} style={{ overflow: "auto" }}>
                  <Draggable bg="yellow" />
                  <Draggable bg="pink">
                    <Logo />
                  </Draggable>
                  {times(10, i => (
                    <Draggable key={i}>
                      <SampleImage />
                    </Draggable>
                  ))}
                </Box>
              </NavSub>
              <NavMain>
                <NavItem>Photos</NavItem>
                <NavItem>Backgrounds</NavItem>
                <NavItem>Layouts</NavItem>
                <NavItem>Text</NavItem>
              </NavMain>
            </Nav>
            <DesignCanvas />
            <MediaQuery query={`(min-width: ${theme.breakpoints[0]})`}>
              <Box bg="purple" p={2} width={40}>
                Toolbar
              </Box>
            </MediaQuery>
          </Body>
          <SizeDetector />
        </Grid>
      </>
    </ThemeProvider>
  );
}

export default App;

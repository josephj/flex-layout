import { Draggable } from "@shopify/draggable";
import { times } from "lodash";
import React, { useEffect, useRef } from "react";
import MediaQuery from "react-responsive";
import { Box } from "rebass";
import { ThemeProvider } from "styled-components";
import { polyfill } from "mobile-drag-drop";
import { scrollBehaviourDragImageTranslateOverride } from "mobile-drag-drop/scroll-behaviour";

import theme from "./theme";
import { ReactComponent as Logo } from "./logo.svg";
import SizeDetector from "./SizeDetector";
import DesignCanvas from "./DesignCanvas";
import {
  Grid,
  Cell,
  Header,
  Body,
  Nav,
  NavMain,
  NavSub,
  NavItem,
  SampleImage
} from "./Styles";
import useDisableScaling from "./useDisableScaling";

import "mobile-drag-drop/default.css";
polyfill({
  dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride
});

function App() {
  useDisableScaling();

  const dragContainerRef = useRef();
  useEffect(() => {
    let draggable = new Draggable(dragContainerRef.current, {
      delay: 300
    });
    return () => {
      draggable.destroy();
      draggable = null;
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <>
        <Grid>
          <Header>Header</Header>
          <Body>
            <Nav>
              <NavSub ref={dragContainerRef}>
                <Cell bg="yellow" />
                <Cell bg="pink">
                  <Logo />
                </Cell>
                {times(10, i => (
                  <Cell key={i}>
                    <SampleImage />
                  </Cell>
                ))}
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

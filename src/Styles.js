import React from "react";
import styled from "styled-components";
import { Box, Card, Flex } from "rebass";

export const Grid = styled(Flex).attrs({ flexDirection: "column" })`
  height: 100%;
  position: fixed;
  width: 100%;
  overflow: hidden;
`;

export const Header = styled(Flex).attrs({
  alignItems: "center",
  bg: "blue",
  p: 3
})``;

export const Body = styled(Flex).attrs({
  flex: 2,
  flexDirection: ["column-reverse", "row"]
})``;

export const Nav = styled(Flex).attrs({
  flexDirection: ["column", "row-reverse"],
  width: [1, 320]
})``;

export const NavMain = styled(Flex).attrs({
  bg: "pink",
  p: 2,
  width: [1, 120],
  flexDirection: ["row", "column"],
  justifyContent: "flex-start"
})`
  white-space: nowrap;
  overflow: auto;
`;

export const NavSub = styled(Box).attrs({
  bg: "orange",
  p: 2,
  width: [1, 200],
  alingItems: "center",
  flexWrap: "nowrap"
})`
  white-space: nowrap;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const NavItem = styled(Card).attrs({
  width: [1 / 4, 1],
  bg: "red",
  borderRadius: 3,
  mr: 1,
  mb: [0, 1],
  p: 2,
  fontSize: "12px"
})`
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const Cell = styled(Card).attrs({
  mr: [1, 0],
  mb: [0, 1],
  width: ["auto", 1],
  className: "draggable-source",
  title: ""
})`
  min-width: 100px;
  width: 178px;
  height: 119px;
  line-height: 0;
  vertical-align: middle;
  border: 2px solid transparent;
  user-select: none;
  &.draggable-source--is-dragging {
    border-color: green;
  }
  &.draggable-mirror {
    opacity: 0.5;
  }

  ${props => `
      img {
        width: 100%;
      }
      @media (max-width: ${props.theme.breakpoints[0]}) {
        display: inline-block;
        img {
          width: 174px;
          user-select: none;
          pointer-events: none;
        }
      }
    `}
`;

export const SampleImage = props => (
  <img
    src="https://c1.staticflickr.com/9/8387/8638813125_3cac0dc01c_n.jpg"
    width="174"
    height="115"
    alt=""
    {...props}
  />
);

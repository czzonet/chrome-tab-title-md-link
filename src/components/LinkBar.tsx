import React from "react";
import { Tab } from "../hooks/useWindowTabs";
import styled from "styled-components";
import { CopyButton } from "./CopyButton";
import { writeToClipboard } from "../lib/clpboard";

export const LinkBar = ({ tab }: { tab: Tab }) => {
  const str = `[${tab.title}](${tab.url})`;
  // const str = `1. [tab.title}](tab.urltab.urltab.urltab.urltab.urltab.urltab.urltab.urltab.url})`;
  const click = () => {
    writeToClipboard(str);
  };
  return (
    <Style>
      <input value={str} readOnly></input>
      <CopyButton click={click}></CopyButton>
    </Style>
  );
};

const Style = styled.div`
  width: 100%;
  height: 80px;

  /* margin: 20px; */
  padding: 10px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  font-size: 16px;
  color: #000;

  input {
    width: 300px;

    font-size: 12px;
    line-height: 20px;
    padding: 3px 12px;

    border: 1px solid #e1e4e8;
    border-radius: 6px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;

    box-shadow: inset 0 1px 0 rgba(225, 228, 232, 0.2);
    color: #24292e;
    background-color: #fafbfc;
  }
`;

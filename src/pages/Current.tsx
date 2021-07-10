import React from "react";
import styled from "styled-components";
import { LinkBar } from "../components/LinkBar";
import { useWindowTabs } from "../hooks/useWindowTabs";

export const Current = () => {
  const { tab } = useWindowTabs();

  return (
    <Style>
      <LinkBar tab={tab}></LinkBar>
    </Style>
  );
};

const Style = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  border-radius: 6px;

  background-color: #7879f1;
`;

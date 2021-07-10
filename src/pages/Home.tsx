import React from "react";
import styled from "styled-components";
import { Current } from "./Current";
import { List } from "./List";

export const Home = () => {
  return (
    <Style>
      <Current></Current>
      <List></List>
    </Style>
  );
};

const Style = styled.div`
  width: 600px;
  max-height: 800px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

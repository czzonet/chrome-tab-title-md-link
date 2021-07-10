import React from "react";
import styled from "styled-components";
import { useWindowTabs } from "../hooks/useWindowTabs";

export const List = () => {
  const { list } = useWindowTabs();
  // const list = [
  //   {
  //     title: "",
  //     url: "",
  //   },
  //   {
  //     title: "",
  //     url: "",
  //   },
  //   {
  //     title: "",
  //     url: "",
  //   },
  // ];

  return (
    <Style>
      <ol>
        {list.map((tab, i) => {
          return <li key={i}>{`[${tab.title}](${tab.url})`}</li>;
        })}
      </ol>
    </Style>
  );
};

const Style = styled.div`
  width: 100%;
  margin-top: 20px;

  background-color: #f7d0cf;
  border-radius: 6px;

  font-size: 16px;

  li {
    color: #f178b6;
    word-break: break-all;
    margin-bottom: 8px;
  }
`;

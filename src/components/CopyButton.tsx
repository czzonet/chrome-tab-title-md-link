import React from "react";
import styled from "styled-components";

import icCopy from "../assets/copy.svg";
// import icCopy from "../assets/delete.svg";

export const CopyButton = ({ click }) => {
  return (
    <Style onClick={click}>
      <img src={icCopy}></img>
    </Style>
  );
};

const Style = styled.div`
  font-size: 12px;
  line-height: 20px;
  padding: 3px 12px;

  margin-left: -1px;

  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  color: #6a737d;
  background: #fafbfc;
  border-radius: 0 6px 6px 0;
  border: 1px solid #e1e4e8;

  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;

  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
    display: inline-block;

    margin-right: 4px;
    fill: currentColor;

    vertical-align: text-top;
  }
`;

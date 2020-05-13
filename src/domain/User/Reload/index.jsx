// @ts-nocheck
import React from "react";
import styled from "styled-components";
import MainBtn from "./../../../components/Btn";

const ReloadBtn = styled(MainBtn)`
  position: absolute;
  right: -47px;
  top: 50%;
  background-color: #d9a139;
  text-shadow: 0px -1px 0px #d9a139;
  &:hover ${this} {
    background: #e4b45b;
  }
`;

const BtnReload = ({ myDynFunc }) => {
  return <ReloadBtn onClick={myDynFunc}>Reload</ReloadBtn>;
};

export default BtnReload;

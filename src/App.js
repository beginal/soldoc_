import React, { forwardRef, useState } from "react";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";
import TimeList from "./components/TimeList";
import SuppleText from "./components/SuppleText";
import Button from "./components/Button";
import SelectDate from "./components/SelectDate";

const App = () => {

  return (
    <StyledWrap>
      <div>진료 예약하기</div>
      <SelectDate label="날짜" />
      <TimeList />
      <SuppleText label="추가 사항(옵션)" placeholder="평소 앓고 있던 질병, 또는 처방전 솔닥 닥터가 &#13;알아야 할 내용이 있다면 여기에 적어주세요." />
      <Button onClick={null}>예약</Button>
    </StyledWrap>
  );
};

export default App;

const StyledWrap = styled.div`
padding: 25px;
  .label {
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 12px;
    color: #1e1e1e;
  }
`;

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useHistory } from 'react-router-dom';

import "react-datepicker/dist/react-datepicker.css";
import TimeList from "../components/TimeList";
import SuppleText from "../components/SuppleText";
import Button from "../components/Button";
import SelectDate from "../components/SelectDate";
import Header from "../components/Header";

const Confirm = () => {
  const history = useHistory();
  const [progressBar, setProgressBar] = useState(30);
  const [selectTime, setSelectTime] = useState();
  const [suppleText, setSuppleText] = useState("");
  const [disabled, setDisabled] = useState(true)

  const handleIsText = e => {
    setSuppleText(e.target.value);
  };

  const handleChangeTime = item => {
    setSelectTime(item);
  };

  const handleClick = () => {
    if(!selectTime) {
      return alert("시간대를 선택해주세요.")
    }
    setProgressBar(100);
    history.push("/confirm")
  };

  useEffect(() => {
    if (selectTime && 31 > progressBar) {
      setProgressBar(prev => prev + 30);
    }
    if (suppleText.length > 0 && 61 > progressBar) {
      setProgressBar(prev => prev + 40);
    }
  }, [progressBar, selectTime, suppleText.length]);

  return (
    <StyledWrap progressBar={progressBar}>
      <Header>진료 예약 확인 (진료 예약 내역)</Header>
      <SelectDate confirm label="진료 예약일 및 시간" />
      {/* <TimeList selectTime={selectTime} onClick={handleChangeTime} /> */}
      <SuppleText
        suppleText={suppleText}
        onChange={handleIsText}
        disabled={disabled}
        label="추가 사항 (옵션)"
        placeholder="추가 사항이 없습니다."
      />
      <Button onClick={handleClick}>확인</Button>
    </StyledWrap>
  );
};

export default Confirm;

const StyledWrap = styled.div`
position: relative;
  padding: 20px;
  .progressBar {
    position: absolute;
    top:0;
    left:0;
    right:0;
    transition: width 1s;
    height: 4px;
    width: ${({progressBar}) => `${progressBar}%`};
    background: linear-gradient(#50a0e0 0%, #a4d4f4 100%);
  }
  .label {
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 12px;
    color: #1e1e1e;
  }
`;

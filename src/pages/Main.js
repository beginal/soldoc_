import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";
import TimeList from "../components/TimeList";
import SuppleText from "../components/SuppleText";
import Button from "../components/Button";
import SelectDate from "../components/SelectDate";
import Header from "../components/Header";
import { changeReserve } from "../redux/soldocReducer";

const Main = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [progressBar, setProgressBar] = useState(30);
  const [startDate, setStartDate] = useState(new Date());
  const [selectTime, setSelectTime] = useState();
  const [suppleText, setSuppleText] = useState("");

  const handleIsText = e => {
    setSuppleText(e.target.value);
  };

  const handleChangeTime = item => {
    setSelectTime(item);
  };

  const handleClick = () => {
    if (!selectTime) {
      return alert("시간대를 선택해주세요.");
    }
    setProgressBar(100);
    dispatch(
      changeReserve({
        year: startDate.getFullYear(),
        month: startDate.getMonth() + 1,
        date: startDate.getDate(),
        time: selectTime,
        message: suppleText,
      })
    );
    history.push("/confirm");
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
      <div>
        <div className="progressBar"></div>
        <Header>진료 예약하기 (진료 날짜 예약)</Header>
        <SelectDate startDate={startDate} onChange={setStartDate} dateFormat="MM / dd / yyyy" label="날짜" />
        <TimeList selectTime={selectTime} onClick={handleChangeTime} />
        <SuppleText
          suppleText={suppleText}
          onChange={handleIsText}
          label="추가 사항 (옵션)"
          placeholder="평소 앓고 있던 질병, 또는 처방전 솔닥 닥터가 &#13;알아야 할 내용이 있다면 여기에 적어주세요."
        />
      </div>
      <Button onClick={handleClick}>예약</Button>
    </StyledWrap>
  );
};

export default Main;

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100%;
  padding: 20px;
  .progressBar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transition: width 1s;
    height: 4px;
    width: ${({ progressBar }) => `${progressBar}%`};
    background: linear-gradient(#50a0e0 0%, #a4d4f4 100%);
  }
`;

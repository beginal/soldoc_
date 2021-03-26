import React, { useEffect } from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import SuppleText from "../components/SuppleText";
import Button from "../components/Button";
import Header from "../components/Header";

import { useSelector } from "react-redux";

const Confirm = () => {
  const history = useHistory();
  const { reserve } = useSelector(state => state.soldocReducer);

  const handleClick = () => {
    alert("예약이 완료되었습니다.")
  }

  useEffect(() => {
    if(reserve.time === 0 || reserve.year === 0) {
      history.push("/");
    }
  }, [history, reserve])

  return (
    <StyledWrap>
      <Header>진료 예약 확인 (진료 예약 내역)</Header>
      <div className="confirmInput">
        <label className="label" htmlFor="">
          진료 예약일 및 시간
        </label>
        <input value={`${reserve.year}년 ${reserve.month}월 ${reserve.date}일, ${reserve.time}`} disabled type="text" />
      </div>
      <SuppleText
        suppleText={reserve.message}
        label="추가 사항 (옵션)"
        disabled
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
  .confirmInput {
    display: flex;
    flex-direction: column;
    > input {
      border-radius: 6px;
      border: 1px solid #edeef0;
      outline: none;
      height: 115px;
      font-weight: 500;
      flex: 1;
      font-size: 14px;
      line-height: 19px;
      resize: none;
      padding: 12px 12px 13px 14px;
    }
  }
`;

import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import SuppleText from "../components/SuppleText";
import Button from "../components/Button";
import Header from "../components/Header";

import { useDispatch, useSelector } from "react-redux";
import { changeReserve } from "../redux/soldocReducer";

const Confirm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { reserve } = useSelector(state => state.soldocReducer);
  const [disabled, setDisabled] = useState(true);
  const [suppleText, setSuppleText] = useState(reserve.message);

  useEffect(() => {
    if (reserve.time === 0 || reserve.year === 0) {
      history.push("/");
    }
  }, [history, reserve]);

  const handleIsText = e => {
    setSuppleText(e.target.value);
  };

  const textEdit = () => {
    setDisabled(prev => !prev);
    if (!disabled) {
      dispatch(
        changeReserve({
          ...reserve,
          message: suppleText,
        })
      );
    }
  };

  const handleClick = () => {
    if (!disabled) {
      alert("수정을 완료해주세요.");
      return;
    }
    alert("예약이 완료되었습니다.");
  };
  return (
    <StyledWrap>
      <div>
        <Header>진료 예약 확인 (진료 예약 내역)</Header>
        <div className="confirmInput">
          <div className="label">
            <label htmlFor="">진료 예약일 및 시간</label>
            <button onClick={() => history.push("/")}>수정하기</button>
          </div>
          <input value={`${reserve.year}년 ${reserve.month}월 ${reserve.date}일, ${reserve.time}`} disabled type="text" />
        </div>
        <SuppleText
          edit={true}
          label="추가 사항 (옵션)"
          suppleText={suppleText}
          onChange={handleIsText}
          textEdit={textEdit}
          disabled={disabled}
          placeholder="추가 사항이 없습니다."
        />
      </div>
      <Button onClick={handleClick}>확인</Button>
    </StyledWrap>
  );
};

export default Confirm;

const StyledWrap = styled.div`
  position: relative;
  height: 100%;
  padding: 20px;
  .label {
    display: flex;
    justify-content: space-between;
    button {
      outline: none;
      border: none;
      background: none;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .confirmInput {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
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

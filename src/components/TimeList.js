import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TimeList = () => {
  const [selectTime, setSelectTime] = useState();
  const [progressBar, setProgressBar] = useState(1);

  const handleChangeTime = item => {
    setSelectTime(item);
  };

  useEffect(() => {
    console.log(selectTime,progressBar);
  }, [selectTime,progressBar]);

  useEffect(() => {
    if(2 > progressBar && selectTime) {
      setProgressBar(2)
    }
  }, [selectTime, progressBar])

  const TimeList = ["16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"];

  return (
    <StyledWrap>
      <label className="label" htmlFor="">시간</label>
      <div className="btnList">
        {TimeList.map(item => {
          const isSelected = selectTime === item ? "selected" : "";
          return (
            <button key={item} className={isSelected} onClick={() => handleChangeTime(item)}>
              {item}
            </button>
          );
        })}
        <button>{">"}</button>
      </div>
    </StyledWrap>
  );
};

export default TimeList;

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  .btnList {
    display: flex;
    flex-flow: row wrap;
    flex-shrink: 1;
    > button {
      background: white;
      outline: none;
      border: 1px solid #edeef0;
      border-radius: 6px;
      padding: 11px 17px;
      width: 73px;
      height: 40px;
      font-size: 14px;
      line-height: 17px;
      font-weight: 500;
      margin: 4px;
      cursor: pointer;
    }
    .selected {
      background: #50a0e0;
      color: white;
    }
  }
`;

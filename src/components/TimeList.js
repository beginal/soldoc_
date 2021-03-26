import React from "react";
import styled from "styled-components";

const TimeList = (props) => {
  const { selectTime, onClick } = props


  const TimeList = ["16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"];

  return (
    <StyledWrap>
      <label className="label" htmlFor="">시간</label>
      {TimeList ? (
      <div className="btnList">
        {TimeList.map(item => {
          const isSelected = selectTime === item ? "selected" : "";
          return (
            <button key={item} className={isSelected} onClick={() => onClick(item)}>
              {item}
            </button>
          );
        })}
        <button>{">"}</button>
      </div>

      ): (
        <span>* 진료 가능한 시간이 없습니다.</span>
      )}
    </StyledWrap>
  );
};

export default TimeList;

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  min-height: 100px;
  .btnList {
    display: flex;
    justify-content: cetner;
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
      margin: 4px 0;
      margin-right: 4px;
      line-height: 17px;
      font-weight: 500;
      cursor: pointer;
    }
    .selected {
      background: #50a0e0;
      color: white;
    }
  }
  > span {
    color: #b0b0b0;
    font-size: 14px;

  }
`;

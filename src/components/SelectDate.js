import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import { addDays } from "date-fns";

const SelectDate = props => {
  const { label, confirm, dateFormat } = props;
  const [startDate, setStartDate] = useState(new Date());


  const selectDate = `${startDate.getFullYear()}년 ${startDate.getMonth()+1}월 ${startDate.getDate()}일, 시간이 들어갈곳`;

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="customInput" ref={ref} onClick={onClick}>  {value}   </button>
      ));

  return (
    <StyledWrap>
      <label className="label" htmlFor="">
        {label}
      </label>
      {confirm ? (
        <input className="confirmInput" type="text" value={selectDate} disabled/>
      ): (
        <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        minDate={new Date()}
        maxDate={addDays(new Date(), 7)}
        dateFormat={dateFormat}
        customInput={<CustomInput />}
      />
      )}
    </StyledWrap>
  );
};

export default SelectDate;

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  .confirmInput {
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
  .customInput {
    border: none;
    outline: none;
    background: none;
    font-weight: bold;
    cursor: pointer;
  }
`;

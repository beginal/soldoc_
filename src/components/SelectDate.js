import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import { addDays } from "date-fns";

const SelectDate = props => {
  const { label } = props;
  const [startDate, setStartDate] = useState(new Date());

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="customInput" ref={ref} onClick={onClick}>
      {value}
    </button>
  ));

  return (
    <StyledWrap>
      <label className="label" htmlFor="">
        {label}
      </label>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        minDate={new Date()}
        maxDate={addDays(new Date(), 7)}
        dateFormat="MM / dd / yyyy"
        customInput={<CustomInput />}
      />
    </StyledWrap>
  );
};

export default SelectDate;

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  .customInput {
    border: none;
    outline: none;
    background: none;
    font-weight: bold;
    cursor: pointer;
  }
`;

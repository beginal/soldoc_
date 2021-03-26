import React, { useState, forwardRef } from 'react'
import DatePicker from "react-datepicker";
import styled from "styled-components";


const SelectDate = (props) => {
  const { label } = props;
  const [startDate, setStartDate] = useState(new Date());

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="customInput" ref={ref} onClick={onClick}>
      {value}
    </button>
  ));

  return (
    <StyledWrap>
        <label className="label" htmlFor="">{label}</label>
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} dateFormat="MM / dd / yyyy" customInput={<CustomInput />} />
    </StyledWrap>
  )
}

export default SelectDate

const StyledWrap = styled.div`
  .customInput {
    border: none;
    outline: none;
    background: none;
    font-weight: bold;
    cursor: pointer;
  }
`;
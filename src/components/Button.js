import React, { useState } from 'react'
import styled from 'styled-components';

const Button = (props) => {
  const [vh, setVh] = useState(window.innerHeight)
  const {children, onClick} = props;
  return (
    <StyledWrap vh={vh} onClick={onClick}>
      {children}
    </StyledWrap>
  )
}

export default Button


const StyledWrap = styled.button`
  width: 100%;
  background: linear-gradient(272.03deg, #50a0e0 34.58%, #a4d4f4 97.7%);
  border-radius: 6px;
  cursor: pointer;
  color: white;
  outline: none;
  border: none;
  font-size: 18px;
  line-height: 22px;
  padding: 14px;
  margin: 10px 0;
`
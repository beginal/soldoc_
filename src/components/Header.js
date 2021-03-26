import React from "react";
import styled from "styled-components";

const Header = props => {
  const { children } = props;
  const mainText = children.split("(")[0];
  const subText = "(" + children.split("(")[1];
  return (
    <StyledWrap>
      <img src="./logo.png" alt="logo" />
      <div className="headerText">
        <h1>{mainText}</h1>
        <p>{subText}</p>
      </div>
    </StyledWrap>
  );
};

export default Header;

const StyledWrap = styled.div`
  .headerText {
    display: flex;
    align-items: flex-end;
    margin-top: 20px;
    padding-bottom: 20px;
    h1 {
      margin: 0;
      font-size: 24px;
    }
    p {
      margin: 0;
      padding-left: 10px;
      color: #b0b0b0;
    }
  }
`;

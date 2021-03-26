import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SuppleText = (props) => {
  const { suppleText, onChange, label, placeholder, disabled } = props;
  const [isText, setIsText] = useState(false);
  useEffect(() => {
    if (suppleText) {
      setIsText(true);
    } else {
      setIsText(false);
    }
  }, [suppleText]);

  return (
    <StyledWrap isText={isText}>
      <label className="label" htmlFor="">{label}</label>
      <div className="textWrap">
        <textarea
          name=""
          id=""
          maxLength="120"
          value={suppleText}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
        {suppleText && (
          <span>{suppleText.length}/120 byte</span>
        )}
      </div>
    </StyledWrap>
  );
};

export default SuppleText;

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  .textWrap {
    display: flex;
    position: relative;
    > textarea {
      background: ${({ isText }) => (isText ? "white" : "#EDEEF0")};
      &:placehoder {
        color: #b0b0b0;
      }
      width: 290px;
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
    > span {
      position: absolute;
      bottom: 10px;
      right: 10px;
      font-size: 8px;
      line-height: 10px;
      color: #b0b0b0;
    }
  }
`;

import Select from "react-select";
import styled from "styled-components";

export const SelectStyled = styled(Select)`
  width: 244px;
`;

export const Button = styled.button`
  width: 136px;
  height: 48px;
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.45872;
  border: none;
  color: #fff;
`;
export const DivWraper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  gap: 18px;
  z-index: 999999;
`;
export const InputWrap = styled.div`
  display: flex;
`;
export const InputFrom = styled.input`
  width: 160px;
  height: 48px;
  padding: 14px 93px 14px 24px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  border: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1111;
  outline: none;
`;

export const InputTo = styled.input`
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 115px 14px 24px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0px 14px 14px 0px;
  background: #f7f7fb;
  border: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1111;
  outline: none;
`;

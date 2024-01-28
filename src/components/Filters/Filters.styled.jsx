import Select from "react-select";
import styled from "styled-components";

export const SelectStyled = styled(Select)`
  width: 244px;
  color: "#121417";
  text-align: start;
  ::-webkit-scrollbar-thumb {
    background-color: rgba(18, 20, 23, 0.2);
  }
`;
export const SelectStyledPrice = styled(Select)`
  width: 125px;
  color: "#121417";
  text-align: start;
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
  align-items: flex-end;
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

  background: #f7f7fb;
  border: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1111;
  outline: none;
  &::placeholder {
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1111;
  }
  padding: 14px 41px 14px 70px;
  color: #121417;
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
  border-left: 1px solid rgba(138, 138, 137, 0.2);
  &::placeholder {
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1111;
  }
  padding: 14px 41px 14px 36px;
`;

export const WrapSelectFrom = styled.div`
  position: relative;
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const BtnResetDiv = styled.div`
  position: absolute;
  top: 38px;
  left: 186px;
  z-index: 1;
`;

export const BtnResetPriceDiv = styled.div`
  position: absolute;
  top: 38px;
  left: 78px;
  z-index: 1;
`;

export const LabelBrandTo = styled.label`
  color: #8a8a89;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28571;
`;

export const WrapSelectTo = styled.div`
  position: relative;
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const WrapInputFromTo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: start;
`;

export const LabelInput = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28571;
`;

export const SpanToPrice = styled.span`
  position: absolute;
  color: #121417;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.111;
  top: 40px;
  right: 54px;
`;

export const SpanCount = styled.span`
  width: 100px;
`;

export const SpanInputFrom = styled.span`
  position: absolute;
  top: 40px;
  left: 24px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1111;
`;

export const SpanInputTo = styled.span`
  position: absolute;
  top: 40px;
  left: 172px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1111;
`;

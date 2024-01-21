import styled from "styled-components";
import { colors } from "../../constants";

export const ModalWrap = styled.div`
  position: relative;
  width: 541px;
  height: 752px;
  background-color: #fff;
  border-radius: 24px;
  padding: 40px 35px;
  display: flex;
  flex-direction: column;
`;
export const ImgStyle = styled.img`
  height: 248px;
  width: 469px;
  border-radius: 20px;
  margin-bottom: 11px;
`;
export const ImgDiv = styled.div``;

export const TitleStyle = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  color: ${colors.GRAY};
  margin-bottom: 8px;
`;

export const SpanStyle = styled.span`
  color: ${colors.BLUE};
`;
export const DiscrpDiv = styled.div`
  max-width: 100%;
  height: 40px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  margin-bottom: 14px;
`;

export const WraperP = styled.div`
  display: flex;
`;

export const FlexItem = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 5px;
  &:nth-child(n + 2) {
    padding-left: 10px;
  }
  &:not(:last-child) {
    border-right: 1px solid #ccc;
  }
`;
export const StyledPDiscrp = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42857;
  color: #121417;
  text-align: start;
  margin-bottom: 24px;
`;

export const Accessories = styled.h3`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42857;
  text-align: start;
  margin-bottom: 8px;
`;

export const RentalCond = styled.h3`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42857;
  text-align: start;
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const Age = styled.div`
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 35px;
  background: #f9f9f9;
  width: 133px;
  height: 32px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;
export const ValidDrivers = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 35px;
  background: #f9f9f9;
  width: 138px;
  height: 32px;
`;

export const AgeValidDiv = styled.div`
  width: 461px;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

export const AgeSpan = styled.span`
  color: ${colors.BLUE};
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
`;

export const SecurityDiv = styled.div`
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 35px;
  background: #f9f9f9;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  width: 175px;
  height: 32px;
`;
export const MileageDiv = styled.div`
  width: 111px;
  height: 32px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;
  border-radius: 35px;
  background: #f9f9f9;
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const MileageSpan = styled.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
  color: ${colors.BLUE};
`;

export const PriceDiv = styled.div`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 35px;
  background: #f9f9f9;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;
  width: 86px;
  height: 32px;
`;

export const PriceSpan = styled.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
  color: ${colors.BLUE};
`;
export const DivSecurMilePrice = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

export const ButtonRentalCar = styled.button`
  padding: 12px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${colors.BLUE};
  border: none;
  &:hover {
    background-color: ${colors.LIGHT_BLUE};
  }
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42857;
  color: ${colors.WHITE};
  width: 168px;
  height: 44px;
  display: flex;
`;

export const BtnClose = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

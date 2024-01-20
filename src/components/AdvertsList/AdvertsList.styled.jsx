import styled from "styled-components";
import { colors } from "../../constants";

export const ImgStyle = styled.img`
  height: 268px;
  border-radius: 20px;
  margin-bottom: 14px;
`;

export const LiStyle = styled.li`
  max-width: 274px;
  height: 426px;
`;
export const TitleStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
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
  margin-bottom: 28px;
`;
export const ImgDiv = styled.div`
  margin-bottom: 14px;
`;

export const ButtonStyle = styled.button`
  border-radius: 12px;
  background-color: ${colors.LIGHT_BLUE};
  width: 274px;
  height: 44px;
  color: ${colors.WHITE};
  border: none;
  &:hover {
    background-color: ${colors.BLUE};
  }
`;

export const WraperP = styled.div`
  display: flex;
`;

export const FlexItem = styled.p`
  white-space: nowrap;

  padding-right: 5px;
  &:nth-child(n + 2) {
    padding-left: 10px;
  }
  &:not(:last-child) {
    border-right: 1px solid #ccc;
  }
`;

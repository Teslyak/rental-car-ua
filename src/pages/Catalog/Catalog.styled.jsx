import styled from "styled-components";
import { colors } from "../../constants";

export const UlWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 29px;
  margin-bottom: 100px;
`;

export const Wraper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ButtonLoadMore = styled.button`
  border: none;
  background: none;
  color: ${colors.BLUE};
  text-decoration: underline;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  &:hover {
    color: ${colors.LIGHT_BLUE};
  }
`;

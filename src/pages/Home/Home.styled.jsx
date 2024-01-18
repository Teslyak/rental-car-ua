import styled from "styled-components";
import backGroundHome from "../../assets/backGroundHome.png";
import { colors } from "../../constants";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backGroundHome});
  height: 85vh;
  background-repeat: no-repeat;

  background-size: cover;
`;

export const Title = styled.h1`
  padding-top: 52px;
  color: ${colors.WHITE};
  width: 550px;
  text-align: center;
  font-size: 44px;
  margin-bottom: 200px;
`;

export const Button = styled.button`
  background-color: ${colors.LIGHT_BLUE};
  color: ${colors.WHITE};
  font-size: 1.3622rem;
  font-weight: 600;
  height: 4.375rem;
  width: 16.25rem;
  border-radius: 8px;
  border: none;
  &:hover {
    background-color: ${colors.BLUE};
  }
`;

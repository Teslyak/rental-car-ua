import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../constants";
export const Wrap = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 20px;
  font-size: 18px;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2), 0 -20px 0px 0 rgba(0, 0, 0, 0.19);
`;

export const Links = styled(NavLink)`
  text-decoration: none;
  color: ${colors.LIGHT_BLUE};
  &:hover {
    color: ${colors.BLUE};
  }
  &.active {
    color: ${colors.BLUE};
    font-weight: 600;
  }
`;

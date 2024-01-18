import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../constants";
export const Wrap = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 20px;
  font-size: 18px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colors.LIGHT_BLUE};
  &:hover {
    color: ${colors.BLUE};
  }
`;

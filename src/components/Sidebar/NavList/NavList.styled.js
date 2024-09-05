import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin-top: 65px;
`;

export const Item = styled.li`
  margin-bottom: 44px;
  display: flex;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Link = styled(NavLink)`
  padding: 11px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  height: 46px;
  color: #9197b3;
  font-size: 14px;
  letter-spacing: -0.14px;
  text-decoration: none;

  &.active {
    border-radius: 8px;
    background: #5932ea;
    color: #ffffff;

    .icon {
      color: #ffffff;
    }
  }
`;

export const Wrapper = styled.div`
  gap: 14px;
  display: flex;
  align-items: "center";
`;

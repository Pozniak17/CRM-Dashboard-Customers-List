import styled from "styled-components";

export const PaginationSection = styled.div`
  margin-top: 30px;
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;

export const BottomText = styled.p`
  color: #b5b7c0;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.14px;
`;

export const BottomList = styled.ul`
  list-style: none;
  display: flex;
  gap: 12px;
`;

export const Button = styled.button`
  background: ${(props) =>
    props.disabled ? "#d3d3d3" : props.$isActive ? "#5932ea" : "#f5f5f5"};
  color: ${(props) =>
    props.disabled ? "#a9a9a9" : props.$isActive ? "#fff" : "#404b52"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: 1px solid
    ${(props) =>
      props.disabled ? "#eee" : props.$isActive ? "#5932ea" : "#eee"};
  padding: 6px 9px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  line-height: 100%; /* 12px */
  letter-spacing: -0.12px;

  &:hover {
    color: ${(props) =>
      props.disabled ? "#a9a9a9" : props.$isActive ? "#fff" : "#fff"};
    background: ${(props) =>
      props.disabled ? "#d3d3d3" : props.$isActive ? "#5932ea" : "#5932ea"};
    border: 1px solid
      ${(props) =>
        props.disabled ? "#eee" : props.$isActive ? "#5932ea" : "#5932ea"};
  }
`;

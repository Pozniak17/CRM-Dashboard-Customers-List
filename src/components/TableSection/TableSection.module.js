import styled from "styled-components";

export const Container = styled.div`
  padding-left: 38px;
  padding-right: 44px;
  outline: 1px solid red;
  border-radius: 18px;
  background-color: #fff;
  width: 968px;
  height: 812px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  padding-top: 30px;
`;

export const FilterWrapper = styled.div`
  padding-top: 44px;
  display: flex;
  gap: 16px;
`;

export const Title = styled.h2`
  margin-bottom: 7px;
  color: #000;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.22px;
`;

export const Text = styled.p`
  color: #16c098;
  font-family: Poppins;
  font-size: 14px;
  letter-spacing: -0.14px;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 7px 8px;
  pointer-events: none; /* Щоб іконка не заважала вводити текст */
`;

export const Input = styled.input`
  width: 216px;
  height: 38px;
  padding: 10px 8px 10px 40px;
  color: #b5b7c0;
  background: #f9fbff;
  border-radius: 10px;
  border: none;
  font-size: 12px;
  letter-spacing: -0.12px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #f9fbff;
  padding: 10px 12px 10px 15px;
  width: 154px;
  height: 38px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

export const AccentFirst = styled.span`
  color: #7e7e7e;
  font-size: 12px;
  letter-spacing: -0.12px;
`;

export const AccentSecond = styled.span`
  color: #3d3c42;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.12px;
`;

export const Table = styled.table`
  margin-top: 40px;
  width: 100%;
`;

export const TableHead = styled.th`
  padding-bottom: 14px;
  border-bottom: 1px solid #eee;
  color: #b5b7c0;
  text-align: justify;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.14px;
`;

export const TableItem = styled.td`
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #eee;
`;

export const StatusItem = styled.span`
  width: 80px;
  padding: 4px 12px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.14px;
  border-radius: 4px;
  align-items: center;
  background-color: ${(props) =>
    props.status === "Active" ? "rgba(22, 192, 152, 0.38)" : "#FFC5C5"};
  color: ${(props) => (props.status === "Active" ? "#008767" : "#DF0404")};
  border: ${(props) =>
    props.status === "Active" ? "1px solid #00B087" : "1px solid #DF0404;"};
`;

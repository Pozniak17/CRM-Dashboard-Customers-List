import styled from "styled-components";

export const Title = styled.h1`
  color: #000;
  font-size: 24px;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
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
  background: #fff;
  border-radius: 10px;
  border: none;
  font-size: 12px;
  letter-spacing: -0.12px;
`;

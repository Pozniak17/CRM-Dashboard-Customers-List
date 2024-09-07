import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 7px 8px;
  pointer-events: none;
`;

export const Input = styled.input`
  background: #f9fbff;
  width: 216px;
  height: 38px;
  padding: 10px 8px 10px 40px;
  border-radius: 10px;
  border: none;
  font-size: 12px;
  letter-spacing: -0.12px;
`;

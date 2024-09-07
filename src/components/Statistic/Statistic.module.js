import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: 40px;
  width: 968px;
  padding-top: 32px;
  height: 151px;
  background-color: #fff;
  border-radius: 18px;

  filter: drop-shadow(0px 10px 60px rgba(226, 236, 249, 0.5));
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
`;

export const Img = styled.img`
  width: 42px;
  height: 42px;
`;

export const ImgWrapper = styled.div`
  background-color: #d3ffe7;
  width: 84px;
  height: 84px;
  margin-right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const Title = styled.h3`
  color: #acacac;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.14px;
`;

export const MainText = styled.p`
  color: #333;
  margin-bottom: 6px;
  font-size: 32px;
  font-weight: 600;
  line-height: 100%; /* 32px */
  letter-spacing: -0.32px;
`;

export const Text = styled.p`
  color: #292d32;
  font-size: 12px;
  letter-spacing: -0.12px;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Accent = styled.span`
  color: ${(props) => (props.$green ? "#00AC4F" : "#D0004B")};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.12px;
`;

export const Wrapper = styled.li`
  display: flex;
`;

export const IconList = styled.ul`
  margin-top: 3px;
  list-style: none;
  display: flex;
`;

export const IconItem = styled.li`
  border-radius: 50%;
  margin-left: -10px;
`;

export const ImgIcon = styled.img`
  z-index: 1;
`;

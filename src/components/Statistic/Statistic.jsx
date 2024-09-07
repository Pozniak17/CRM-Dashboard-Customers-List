import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import {
  Accent,
  Container,
  Img,
  ImgWrapper,
  List,
  MainText,
  Text,
  TextWrapper,
  Title,
  Wrapper,
} from "./Statistic.module";
import Customers from "../../assets/customers.svg";
import Members from "../../assets/members.svg";
import Monitor from "../../assets/monitor.svg";

export default function Statistic() {
  return (
    <Container>
      <List>
        <Wrapper>
          <ImgWrapper>
            <Img src={Customers} alt="Customers" />
          </ImgWrapper>
          <div>
            <Title>Total Customers</Title>
            <MainText>5,423</MainText>
            <TextWrapper>
              <FaArrowUp height="20px" color="#00AC4F" />
              <Text>
                <Accent $green>16%</Accent> this month
              </Text>
            </TextWrapper>
          </div>
        </Wrapper>

        <Wrapper>
          <ImgWrapper>
            <Img src={Members} alt="Members" />
          </ImgWrapper>

          <div>
            <Title>Members</Title>
            <MainText>1,893 </MainText>
            <TextWrapper>
              <FaArrowDown height="20px" color="#D0004B" />
              <Text>
                <Accent $red>1%</Accent> this month
              </Text>
            </TextWrapper>
          </div>
        </Wrapper>

        <Wrapper>
          <ImgWrapper>
            <Img src={Monitor} alt="Monitor" />
          </ImgWrapper>
          <div>
            <Title>Active Now</Title>
            <MainText>189</MainText>
            <div>{/* <FaArrowUp /> */}</div>
          </div>
        </Wrapper>
      </List>
    </Container>
  );
}

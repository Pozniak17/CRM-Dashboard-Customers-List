import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import {
  Accent,
  Container,
  IconItem,
  IconList,
  Img,
  ImgIcon,
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
import Ellipse1 from "../../assets/Ellipse1.svg";
import Ellipse2 from "../../assets/Ellipse2.svg";
import Ellipse3 from "../../assets/Ellipse3.svg";
import Ellipse4 from "../../assets/Ellipse4.svg";
import Ellipse5 from "../../assets/Ellipse5.svg";

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

            <IconList>
              <IconItem>
                <ImgIcon src={Ellipse1} alt="Woman 1" />
              </IconItem>
              <IconItem>
                <ImgIcon src={Ellipse2} alt="Woman 2" />
              </IconItem>
              <IconItem>
                <ImgIcon src={Ellipse3} alt="Woman 3" />
              </IconItem>
              <IconItem>
                <ImgIcon src={Ellipse4} alt="Woman 4" />
              </IconItem>
              <IconItem>
                <ImgIcon src={Ellipse5} alt="Woman 5" />
              </IconItem>
            </IconList>
          </div>
        </Wrapper>
      </List>
    </Container>
  );
}

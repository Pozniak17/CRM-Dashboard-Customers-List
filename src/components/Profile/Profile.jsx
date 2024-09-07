import { IoChevronDownSharp } from "react-icons/io5";
import { Container, Text, Title, Wrapper } from "./Profile.module";

export default function Profile() {
  return (
    <Container>
      <img src="/profile.jpg" width="42px" height="42px" alt="user avatar" />
      <Wrapper>
        <Title>Evano</Title>
        <Text>Project Manager</Text>
      </Wrapper>
      <IoChevronDownSharp size="24px" color="#757575" />
    </Container>
  );
}

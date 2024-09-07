import { GoSearch } from "react-icons/go";
import {
  IconWrapper,
  Input,
  InputContainer,
  Title,
  TopWrapper,
} from "./TopBar.module";

export default function TopBar() {
  return (
    <TopWrapper>
      <Title>Hello Evano👋🏼,</Title>

      <InputContainer>
        <IconWrapper>
          <GoSearch size="24px" color="#7E7E7E" />
        </IconWrapper>
        <Input type="text" placeholder="Search" />
      </InputContainer>
    </TopWrapper>
  );
}

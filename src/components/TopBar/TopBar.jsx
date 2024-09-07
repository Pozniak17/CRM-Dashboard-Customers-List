import { Title, TopWrapper } from "./TopBar.module";
import FormSection from "../FormSection/FormSection";

export default function TopBar({ onSearch }) {
  return (
    <TopWrapper>
      <Title>Hello Evano👋🏼,</Title>

      <FormSection onSearch={onSearch} $background="#f9fbff" />
    </TopWrapper>
  );
}

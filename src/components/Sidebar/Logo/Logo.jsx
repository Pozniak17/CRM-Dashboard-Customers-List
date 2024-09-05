import { RiSettingsLine } from "react-icons/ri";
import { LogoAccent, LogoWrapper, Title } from "./Logo.module";

export default function Logo() {
  return (
    <LogoWrapper>
      <RiSettingsLine size="37px" />
      <Title>Dashboard</Title>
      <LogoAccent>v.01</LogoAccent>
    </LogoWrapper>
  );
}

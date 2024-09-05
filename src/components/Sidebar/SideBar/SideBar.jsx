import Logo from "../Logo/Logo";
import MenuList from "../NavList/NavList.jsx";
import { Container } from "./SideBar.module.js";

export default function SideBar() {
  return (
    <Container>
      <Logo />
      <MenuList />
    </Container>
  );
}

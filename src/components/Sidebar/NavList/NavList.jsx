import { CiDiscount1 } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import { Item, Link, List, Wrapper } from "./NavList.module";
import { TbUserSquareRounded } from "react-icons/tb";
import { PiCubeFocusLight } from "react-icons/pi";
import { PiKey } from "react-icons/pi";
import { RiQuestionnaireLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";

export default function NavList() {
  return (
    <nav>
      <List>
        <Item>
          <Link to="/">
            <Wrapper>
              <PiKey size="24px" />
              <span>Dashboard</span>
            </Wrapper>
          </Link>
        </Item>

        <Item>
          <Link to="/product">
            <Wrapper>
              <PiCubeFocusLight size="24px" />
              <span>Product</span>
            </Wrapper>
          </Link>
        </Item>

        <Item>
          <Link to="/customers">
            <Wrapper>
              <TbUserSquareRounded size="24px" className="icon" />
              <span>Customers</span>
            </Wrapper>
            <FaChevronRight />
          </Link>
        </Item>

        <Item>
          <Link to="/income">
            <Wrapper>
              <IoWalletOutline size="24px" />
              <span>Income</span>
            </Wrapper>
            <FaChevronRight />
          </Link>
        </Item>

        <Item>
          <Link to="/promote">
            <Wrapper>
              <CiDiscount1 size="24px" />
              <span>Promote</span>
            </Wrapper>
            <FaChevronRight />
          </Link>
        </Item>

        <Item>
          <Link to="/help">
            <Wrapper>
              <RiQuestionnaireLine size="24px" />
              <span>Help</span>
            </Wrapper>
            <FaChevronRight />
          </Link>
        </Item>
      </List>
    </nav>
  );
}

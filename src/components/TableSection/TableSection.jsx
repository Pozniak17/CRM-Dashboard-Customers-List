import { GoSearch } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import {
  AccentFirst,
  AccentSecond,
  BottomList,
  BottomSection,
  BottomText,
  SortButton,
  Container,
  FilterWrapper,
  IconWrapper,
  Input,
  InputContainer,
  StatusItem,
  Table,
  TableHead,
  TableItem,
  Text,
  Title,
  TitleWrapper,
  Wrapper,
  Button,
} from "./TableSection.module";

export default function TableSection({ data }) {
  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <Title>All Customers</Title>
          <Text>Active Members</Text>
        </TitleWrapper>

        <FilterWrapper>
          <InputContainer>
            <IconWrapper>
              <GoSearch size="24px" color="#7E7E7E" />
            </IconWrapper>
            <Input type="text" placeholder="Search" />
          </InputContainer>

          <SortButton>
            <AccentFirst>Short by : </AccentFirst>
            <AccentSecond>Newest</AccentSecond>
            <FaChevronDown />
          </SortButton>
        </FilterWrapper>
      </Wrapper>

      <Table>
        <thead>
          <tr>
            <TableHead>Customer Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Status</TableHead>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <TableItem>{item.name}</TableItem>
              <TableItem>{item.company}</TableItem>
              <TableItem>{item.phone}</TableItem>
              <TableItem>{item.email}</TableItem>
              <TableItem>{item.country}</TableItem>
              <TableItem status={item.status}>
                <StatusItem>{item.status}</StatusItem>
              </TableItem>
            </tr>
          ))}
        </tbody>
      </Table>

      <BottomSection>
        <BottomText>Showing data 1 to 8 of 256K entries</BottomText>
        <BottomList>
          <li>
            <Button>
              <FaChevronLeft width="8px" height="12px" />
            </Button>
          </li>
          <li>
            <Button>1</Button>
          </li>
          <li>
            <Button>2</Button>
          </li>
          <li>
            <Button>3</Button>
          </li>
          <li>
            <Button>4</Button>
          </li>
          <li>
            <span>...</span>
          </li>
          <li>
            <Button>40</Button>
          </li>
          <li>
            <Button>
              <FaChevronRight width="8px" height="12px" />
            </Button>
          </li>
        </BottomList>
      </BottomSection>
    </Container>
  );
}

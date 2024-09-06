import { GoSearch } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";

import {
  AccentFirst,
  AccentSecond,
  Button,
  Container,
  FilterWrapper,
  IconWrapper,
  Input,
  InputContainer,
  Table,
  TableHead,
  TableItem,
  Text,
  Title,
  TitleWrapper,
  Wrapper,
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

          <Button>
            <AccentFirst>Short by : </AccentFirst>
            <AccentSecond>Newest</AccentSecond>
            <FaChevronDown />
          </Button>
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
              <TableItem>{item.status}</TableItem>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

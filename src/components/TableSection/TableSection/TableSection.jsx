import { FaChevronDown } from "react-icons/fa";

import {
  AccentFirst,
  AccentSecond,
  SortButton,
  Container,
  FilterWrapper,
  StatusItem,
  Table,
  TableHead,
  TableItem,
  Text,
  Title,
  TitleWrapper,
  Wrapper,
} from "./TableSection.module";
import FormSection from "../../FormSection/FormSection";
import PagitationSection from "../PagitationSection/PagitationSection";

export default function TableSection({
  data,
  onHandle,
  currentPage,
  onSearch,
  allUsers,
}) {
  const nextPage = () => {
    onHandle((prevState) => prevState + 1);
  };

  const prevPage = () => {
    onHandle((prevState) => prevState - 1);
  };

  const handlePageClick = (pageNumber) => {
    onHandle(pageNumber);
  };

  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <Title>All Customers</Title>
          <Text>Active Members</Text>
        </TitleWrapper>

        <FilterWrapper>
          {/* Компонент форми */}
          <FormSection onSearch={onSearch} $background="#F9FBFF" />

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
              <TableItem>
                <StatusItem $status={item.status}>{item.status}</StatusItem>
              </TableItem>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* тут секція пагінації */}
      <PagitationSection
        currentPage={currentPage}
        allUsers={allUsers}
        nextPage={nextPage}
        prevPage={prevPage}
        handlePageClick={handlePageClick}
      />
    </Container>
  );
}

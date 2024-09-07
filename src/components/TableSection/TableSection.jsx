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
import FormSection from "../FormSection/FormSection";

export default function TableSection({
  data,
  onHandle,
  currentPage,
  onSearch,
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

      <BottomSection>
        <BottomText>{`Showing data ${currentPage} to 13 of 256K entries`}</BottomText>
        <BottomList>
          <li>
            <Button onClick={prevPage} disabled={currentPage === 1}>
              <FaChevronLeft width="8px" height="12px" />
            </Button>
          </li>
          {[1, 2, 3, 4].map((pageNumber) => (
            <li key={pageNumber}>
              <Button
                onClick={() => handlePageClick(pageNumber)}
                $isActive={pageNumber === currentPage ? "active" : ""}
              >
                {pageNumber}
              </Button>
            </li>
          ))}
          <li>
            <span>...</span>
          </li>
          <li>
            <Button
              onClick={() => handlePageClick(13)}
              $isActive={13 === currentPage ? "active" : ""}
            >
              13
            </Button>
          </li>
          <li>
            <Button onClick={nextPage} disabled={currentPage === 13}>
              <FaChevronRight width="8px" height="12px" />
            </Button>
          </li>
        </BottomList>
      </BottomSection>
    </Container>
  );
}

import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import {
  BottomList,
  BottomText,
  Button,
  PaginationSection,
} from "./PagitationSection.module";

export default function PagitationSection({
  currentPage,
  nextPage,
  prevPage,
  handlePageClick,
  allUsers,
}) {
  return (
    <PaginationSection>
      <BottomText>{`Showing data ${currentPage} to 13 of ${allUsers.length} entries`}</BottomText>
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
    </PaginationSection>
  );
}

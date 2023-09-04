import * as Styled from './PaginationButtons.styled'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useMemo } from 'react';

interface PaginationButtonsProps {
  prevPage: () => void;
  nextPage: () => void;
  lastPage: number;
  currentPageNumber: number;
  onChangePage: (pageValue: number) => void;
}

const PaginationButtons = ({onChangePage, currentPageNumber, lastPage, prevPage, nextPage}: PaginationButtonsProps) => {

  const pageNumbers = useMemo(() => {
    if (lastPage <= 3) {
      return Array.from(Array(lastPage).keys()).map((i) => i + 1);
    } else if (currentPageNumber === 1 || currentPageNumber === 2) {
      return Array.from(Array(3).keys()).map((i) => i + 1);
    } else if (currentPageNumber > 2 && lastPage > currentPageNumber) {
      return [currentPageNumber - 1, currentPageNumber, currentPageNumber + 1];
    } else if (currentPageNumber === lastPage || currentPageNumber + 1 === lastPage) {
      return [lastPage - 2, lastPage - 1, lastPage];
    }
  }, [currentPageNumber, lastPage]);


  return (
    <Styled.Wrapper>
      <Styled.Button disabled={currentPageNumber === 1} onClick={prevPage}> <MdOutlineKeyboardArrowLeft/> </Styled.Button>
        {pageNumbers?.map((number) => {
          return (
            <Styled.PageNumber
              key={number}
              id={String(number)}
              onClick={() => onChangePage(number)}
              className={number === currentPageNumber ? 'active' : ''}
              >
                {number}
            </Styled.PageNumber>
          );
        })}
      <Styled.Button disabled={currentPageNumber === lastPage} onClick={nextPage}> <MdOutlineKeyboardArrowRight/> </Styled.Button>
    </Styled.Wrapper>
  )
};

export default PaginationButtons;
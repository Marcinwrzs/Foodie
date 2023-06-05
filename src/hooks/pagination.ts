import { useState, useMemo } from 'react';

export const usePagination = (perPage = 8, offset = 0) => {

  const [resultsCount, setResultsCount] = useState<number>(offset);
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);

  const updateResultsCount = (count: number): void => {
    setResultsCount(count)
  };

  const nextPage = (): void => {
    setCurrentPageNumber(currentPageNumber + 1);
  };

  const prevPage = (): void => {
    setCurrentPageNumber(currentPageNumber - 1);
  };

  const currentOffset = useMemo(() => perPage * (currentPageNumber - 1), [currentPageNumber, perPage]);

  const lastPage = useMemo(() => Math.ceil(resultsCount / perPage), [
    resultsCount,
    perPage
  ]);

  const changePage = (pageValue: number): void => {
    setCurrentPageNumber(pageValue);
  };

  return {
    currentOffset,
    perPage,
    nextPage,
    prevPage,
    updateResultsCount,
    lastPage,
    currentPageNumber,
    changePage,
  };
};
import {Fragment, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Recipe from 'pages/Recipe/Recipe';
import {RecipeTypes} from 'pages/Recipe/Recipe';
import * as Styled from './Searched.styled';
import { getSearched} from 'api/services/recipes';
import { usePagination } from "hooks/pagination";
import PaginationButtons from 'pages/PaginationButtons/PaginationButtons'

const Searched: React.FC = () => {

  let params = useParams<string>();

  const [searched, setSearched] = useState<RecipeTypes[]>([]);
  const [requestsLimitExceeded, setRequestsLimitExceeded] = useState<boolean>(false);
  
  const {
    currentOffset,
    nextPage,
    prevPage,
    perPage,
    updateResultsCount, 
    lastPage,
    currentPageNumber,
    changePage,
  } = usePagination(8, 0);

  const getRecipes = async (name: string, perPage: number, currentPage: number): Promise<void> => {
    try {
      let response = await getSearched(name, perPage, currentPage);
      setSearched(response.results);
      updateResultsCount(response.totalResults); 
      setRequestsLimitExceeded(false);
    } catch (error) {
      setRequestsLimitExceeded(true);
    }
  }

  useEffect(() => {
    params.type && getRecipes(params.type, perPage, currentOffset);
  }, [params.type, currentOffset, perPage]);

  useEffect(() => {
    changePage(1);
  },[params.type])

  return (
    <Fragment>
      {!requestsLimitExceeded ? (
        searched.length ? (
          <>
          <Styled.FavContainer>
            {searched.map((item) => {
              return (
                <Recipe key={item.id} id={item.id} image={item.image} title={item.title}/>
              )
            })}
          </Styled.FavContainer>

          <PaginationButtons onChangePage={changePage} lastPage={lastPage} currentPageNumber={currentPageNumber} prevPage={prevPage} nextPage={nextPage}/>
          </>
        ) : (
          <Styled.FavErrContainer>
            <h1><span>Sorry,</span> we don't have this recipe.</h1>
          </Styled.FavErrContainer>
        )
      ) : (
        <Styled.FavErrContainer>
          <h1><span>Sorry! </span>Daily limit has been reached.</h1>
        </Styled.FavErrContainer>
      )}
    </Fragment>
  )
}

export default Searched;
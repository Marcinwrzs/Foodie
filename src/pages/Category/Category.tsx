import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Recipe from 'pages/Recipe/Recipe';
import * as Styled from './Category.styled';
import {RecipeTypes} from 'pages/Recipe/Recipe';
import { getCategories, getSalad, getDessert} from 'api/services/recipes';
import Sort from 'pages/Sort/Sort';
import PaginationButtons from 'pages/PaginationButtons/PaginationButtons';
import { usePagination } from 'hooks/pagination';
import 'index.css';

enum SortingType {
  Random = 'Random',
  Alphabetically = 'A-Z',
  Backwards = 'Z-A'
}

const Category: React.FC = () => {

  let params = useParams<string>();
  
  const [category, setCategory] = useState<RecipeTypes[]>([]);
  const [requestsLimitExceeded, setRequestsLimitExceeded] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('Default');

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

  const getRecipes = async (name: string, _perPage:number, currentPage: number): Promise<void> => {
    try {
      let response;
      if(name === 'salad') {
        response = await getSalad(name, _perPage, currentPage);
      } else if (name === 'dessert') {
        response = await getDessert(name, _perPage, currentPage);
      } else {
        response = await getCategories(name, _perPage, currentPage);
      }
      setCategory(response.results);
      updateResultsCount(response.totalResults);
    } catch (error) {
      setRequestsLimitExceeded(true);
    }
  }

  useEffect(() => {
    params.type && getRecipes(params.type, perPage, currentOffset);
  }, [params.type, currentOffset, perPage]);

  useEffect(() => {
    sortRecipes(sortBy)
  }, [sortBy])

  const sortRecipes = (sort: string): void => {
    setSortBy(sort);
    let sortedRecipes;
    
    switch(sort) {
      case SortingType.Alphabetically:
        sortedRecipes = category.sort((a, b) => (a.title > b.title) ? 1 : -1);
        return setCategory([...sortedRecipes]);
      case SortingType.Backwards:
        sortedRecipes = category.sort((a, b) => (a.title < b.title) ? 1 : -1);
        return setCategory([...sortedRecipes]);
      case SortingType.Random:
          sortedRecipes = category.sort((a, b) => (a.id > b.id) ? 1 : -1);
          return setCategory([...sortedRecipes]);
      default:
        return;
    }
  }

  return (
    <Styled.CatWrapper>      
      {params.type && <h1>{ params.type.toUpperCase()}</h1>}
      <Sort value={sortBy} onSort={setSortBy} />
      <div>
        {!requestsLimitExceeded ? (
          <>
          <Styled.CatContainer>
          {category.map((item) => {
            return (
              <Recipe key={item.id} id={item.id} image={item.image} title={item.title}/>  
            )
          })}
          </Styled.CatContainer>
          <PaginationButtons onChangePage={changePage} lastPage={lastPage} currentPageNumber={currentPageNumber} prevPage={prevPage} nextPage={nextPage}/>
          </>
        ) : (
          <Styled.CatContainer>
            <h1><span>Sorry! </span>Daily limit has been reached.</h1>  
          </Styled.CatContainer>
        )}
      </div>
    </Styled.CatWrapper>
  )
};

export default Category;
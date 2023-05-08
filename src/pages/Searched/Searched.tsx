import {Fragment, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Recipe from 'pages/Recipe/Recipe';
import {RecipeTypes} from 'pages/Recipe/Recipe';
import {FavErrContainer, FavContainer} from './Searched.styled';

const Searched: React.FC = () => {

  let params = useParams<string>();
  const [searched, setSearched] = useState<RecipeTypes[]>([]);
  const [requestsLimitExceeded, setRequestsLimitExceeded] = useState<boolean>(false);
  
  const getSearchedRecipe = async (name: string): Promise<void> => {

    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);

    if(data.status === 402) {
      setRequestsLimitExceeded(true);
    } else {
      const recipes = await data.json();
      setSearched(recipes.results);
      setRequestsLimitExceeded(false);
    }
  }

  useEffect(() => {
    params.type && getSearchedRecipe(params.type);
  }, [params.type]);
   

  return (
    <Fragment>
      {!requestsLimitExceeded ? (
        searched.length ? (
          <FavContainer>
            {searched.map((item) => {
              return (
                <Recipe key={item.id} id={item.id} image={item.image} title={item.title}/>
              )
            })}
          </FavContainer>
        ) : (
          <FavErrContainer>
            <h1><span>Sorry,</span> we don't have this recipe.</h1>
          </FavErrContainer>
        )
      ) : (
        <FavErrContainer>
          <h1><span>Sorry! </span>Daily limit has been reached.</h1>
        </FavErrContainer>
      )}
    </Fragment>
  )
}

export default Searched;
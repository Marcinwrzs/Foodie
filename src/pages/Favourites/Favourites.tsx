import Recipe from 'pages/Recipe/Recipe';
import {FavWrapper, FavContainer, LoadingComponentContainer, LoadingComponent} from './Favourites.styled'
import { useFavouritesContext } from "context/FavouritesContext";
import {RecipeTypes} from 'pages/Recipe/Recipe';
import { useCallback, useEffect, useState} from 'react';
import { getFavourites, mapRecipes} from 'api/services/recipes';

const Favourities: React.FC = () => {

  const { favourites } = useFavouritesContext();
  const [favouritesRecipes, setFavouritesRecipes ] = useState<RecipeTypes[]>([])
  const [requestsLimitExceeded, setRequestsLimitExceeded] = useState<boolean>(false);

  const loadRecipe = async (id: number): Promise<RecipeTypes> => {
    try {
      return await getFavourites(id);
    } 
    catch (error) {
      setRequestsLimitExceeded(true);
      return await getFavourites(id);
    }
  } 

  const loadAllRecipes = useCallback(async (): Promise<void> => {
    const recipesRaw = await Promise.all(favourites.map(loadRecipe));
    const recipes = recipesRaw.map(mapRecipes);
    setFavouritesRecipes(recipes)  
  }, [favourites]);

  useEffect(() => {
    loadAllRecipes();
  }, [loadAllRecipes]);

  return (
    <FavWrapper>
      <h1>Favourities</h1> 
      <FavContainer>
        {!requestsLimitExceeded ? (
          <>
          {favourites.length ? (
              favouritesRecipes.length ? (
                favouritesRecipes.map((item: RecipeTypes) => {
                  return (
                    <Recipe className='fav' key={item.id} id={item.id} image={item.image} title={item.title} />  
                  )
                })
              ) : (
                <LoadingComponentContainer>
                  <LoadingComponent>
                    {[...Array(9)].map((item, index) => (<div key={index}></div>))}
                  </LoadingComponent>
                </LoadingComponentContainer>
              )
            )
          : (
          <h1><span>Sorry,</span> You don't have any favourite recipe.</h1>
            )}
          </>
          ) : (
          <>
            <h1><span>Sorry,</span> Daily limit has been exceed</h1>
          </>
        )}
      </FavContainer>
    </FavWrapper>
  )
}

export default Favourities;
import Recipe from "pages/Recipe/Recipe";

import * as Styled from "./Favourites.styled";
import { useFavouritesContext } from "context/FavouritesContext";
import { RecipeTypes } from "pages/Recipe/Recipe";
import { useCallback, useEffect, useState } from "react";
import { getFavourites, mapRecipes } from "api/services/recipes";
import { useTokenContext } from "context/tokenContext/useTokenContext";
import axios from "api/useAxios/axios";

const Favourities: React.FC = () => {
  const [favouriteRecipes, setFavouriteRecipes] = useState<RecipeTypes[]>([]);
  const [requestsLimitExceeded, setRequestsLimitExceeded] =
    useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const { favouriteRecipesId, GetFavouritesFromApi } = useFavouritesContext();
  const { accessToken } = useTokenContext();

  const checkProfile = useCallback(async () => {
    try {
      await axios.get(
        "https://hr-api-with-favourite-recipes.onrender.com/users/me",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (_error) {
      setIsError(true);
    }
  }, [accessToken]);

  const loadRecipe = async (id: string): Promise<RecipeTypes> => {
    try {
      return await getFavourites(id);
    } catch (error) {
      setRequestsLimitExceeded(true);
      return await getFavourites(id);
    }
  };

  const loadAllRecipes = useCallback(async () => {
    const recipesRaw = await Promise.all(favouriteRecipesId.map(loadRecipe));
    const recipes = recipesRaw.map(mapRecipes);
    setFavouriteRecipes(recipes);
  }, [favouriteRecipesId]);

  useEffect(() => {
    if (accessToken) {
      checkProfile();
      GetFavouritesFromApi();
    }
  }, [GetFavouritesFromApi, accessToken, checkProfile]);

  useEffect(() => {
    accessToken && loadAllRecipes();
  }, [accessToken, loadAllRecipes]);

  const generateFavouriteContent = () => {
    if (!accessToken || isError) {
      return (
        <h1>
          <span>Sorry! </span>You have to be logged in to see your favourite
          recipes!
        </h1>
      );
    } else if (requestsLimitExceeded) {
      return (
        <h1>
          <span>Sorry,</span> Daily limit has been exceeded
        </h1>
      );
    } else if (!favouriteRecipesId.length) {
      return (
        <h1>
          <span>Sorry,</span> You don't have any favourite recipe.
        </h1>
      );
    } else if (!favouriteRecipes.length) {
      return (
        <Styled.LoadingComponentContainer>
          <Styled.LoadingComponent>
            {[...Array(9)].map((item, index) => (
              <div key={index}></div>
            ))}
          </Styled.LoadingComponent>
        </Styled.LoadingComponentContainer>
      );
    } else {
      return favouriteRecipes.map((item: RecipeTypes) => (
        <Recipe
          className="fav"
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
        />
      ));
    }
  };

  return (
    <Styled.FavWrapper>
      <h1>Favourites</h1>
      <Styled.FavContainer>{generateFavouriteContent()}</Styled.FavContainer>
    </Styled.FavWrapper>
  );
};

export default Favourities;

import axios from "api/useAxios/axios";
import { createContext, useCallback, useContext, useState } from "react";
import { useTokenContext } from "./tokenContext/useTokenContext";

interface IThemeContext {
  favouriteRecipesId: string[];
  addRecipeToFavourites: (id: string, image: string, title: string) => void;
  removeRecipeFromFavourites: (
    id: string,
    image: string,
    title: string
  ) => void;
  GetFavouritesFromApi: () => void;
}

const initialState = {
  favouriteRecipesId: [],
  addRecipeToFavourites: () => {},
  removeRecipeFromFavourites: () => {},
  GetFavouritesFromApi: () => {},
};

const FavouritesContext = createContext<IThemeContext>(initialState);

const FavouritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favouriteRecipesId, setFavouriteRecipesId] = useState<string[]>([]);

  const { accessToken } = useTokenContext();

  const addRecipeToFavourites = async (
    recipeId: string,
    image: string,
    title: string
  ) => {
    const data = { recipeId: recipeId, name: title, imageUrl: image };
    try {
      await axios.post(
        `https://hr-api-with-favourite-recipes.onrender.com/favourite-recipes/add/${recipeId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      const newRecipies = [...favouriteRecipesId, recipeId];
      setFavouriteRecipesId(newRecipies);
    } catch (error) {
      new Error();
    }
  };

  const removeRecipeFromFavourites = async (
    recipeId: string,
    image: string,
    title: string
  ) => {
    const data = { recipeId: recipeId, name: title, imageUrl: image };
    try {
      await axios.delete(
        `https://hr-api-with-favourite-recipes.onrender.com/favourite-recipes/remove/${recipeId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          data: data,
        }
      );
      const newRecipies = favouriteRecipesId.filter(
        (id) => Number(id) !== Number(recipeId)
      );
      setFavouriteRecipesId(newRecipies);
    } catch (error) {
      new Error();
    }
  };

  const GetFavouritesFromApi = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://hr-api-with-favourite-recipes.onrender.com/favourite-recipes/all",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const recipeIds = response.data.map(
        (recipe: { recipeId: string }) => recipe.recipeId
      );
      setFavouriteRecipesId(recipeIds);
    } catch (_error) {
      throw _error;
    }
  }, [accessToken]);

  return (
    <FavouritesContext.Provider
      value={{
        favouriteRecipesId,
        GetFavouritesFromApi,
        addRecipeToFavourites,
        removeRecipeFromFavourites,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavouritesContext = () => useContext(FavouritesContext);
export default FavouritesProvider;

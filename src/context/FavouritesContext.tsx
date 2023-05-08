import { createContext, useContext, useEffect, useState } from "react";

interface IThemeContext {
  favourites: number[];
  addRecipeToFavourites: (id: number) => void,
  removeRecipeFromFavourites: (id: number) => void,
}
  
const initialState = {
  favourites: [],
  addRecipeToFavourites: () => {},
  removeRecipeFromFavourites: () => {},
}
const FAVOUITES_STORAGE_KEY = 'favourites';

const FavouritesContext = createContext<IThemeContext>(initialState);

const FavouritesProvider = ({ children }: { children: React.ReactNode }) => {

  const [favourites, setFavourites] = useState<number[]>(initialState.favourites)

  const addRecipeToFavourites = (id: number): void => {
    const favouritesItems = [...favourites, id ];
    
    setFavourites(favouritesItems);
    localStorage.setItem(FAVOUITES_STORAGE_KEY,JSON.stringify(favouritesItems));
  };

  const removeRecipeFromFavourites = (id: number): void => {
    const favouritesItems = favourites.filter((item: number) => item !== id)
    setFavourites(favouritesItems);
    localStorage.setItem(FAVOUITES_STORAGE_KEY,JSON.stringify(favouritesItems));
  };

  const loadInitialData = () => {
    const data = localStorage.getItem(FAVOUITES_STORAGE_KEY);
    if(data) setFavourites(JSON.parse(data));
  };

  useEffect(loadInitialData, []);

  return (
    <FavouritesContext.Provider
      value={{ 
        favourites,
        addRecipeToFavourites,
        removeRecipeFromFavourites
      }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavouritesContext = () => useContext(FavouritesContext);

export default FavouritesProvider;

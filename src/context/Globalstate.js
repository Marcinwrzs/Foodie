import { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  favourites: localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) : [],
  isOpen: false,
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(state.favourites));
  }, [state])

  const addRecipeToFavourites = recipe => {
    dispatch({ type: "ADD_RECIPES_TO_FAVOURITES", payload: recipe });
  };

  const removeRecipeFromFavourites = id => {
    dispatch({type: "REMOVE_RECIPES_FROM_FAVOURITES", payload: id});
  }

  const openCloseMenu = (isOpen) => {
    dispatch({type: "OPEN_CLOSE_MENU", payload: isOpen});
  }

  const goPage = (isOpen) => {
    dispatch({type: "GO_PAGE", payload: isOpen});
  }

  return (
    <GlobalContext.Provider value={{
      favourites: state.favourites,
        isOpen: state.isOpen,
        openCloseMenu,
        goPage,
        addRecipeToFavourites,
        removeRecipeFromFavourites
        }}>
        {props.children}
    </GlobalContext.Provider>
  )
};
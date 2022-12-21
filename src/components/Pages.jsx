import {Route, Routes} from 'react-router-dom';
import {FavouritesContext} from '../context/Globalstate';
import React, {useContext} from 'react';
import Home from '../pages/Home';
import Category from '../pages/Category';
import Searched from '../pages/Searched';
import Favourites from '../pages/Favourites';
import RecipeDetails from '../pages/RecipeDetails';
import ErrorPage from '../pages/ErrorPage';
import '../index.css';
import {PagesCountainer} from './Pages.styled'

const Pages = () => {

  const {isOpen} = useContext(FavouritesContext);

  return (
    <PagesCountainer isOpen={isOpen}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:type" element={<Category />} />
        <Route path="/searched/:type" element={<Searched />} />
        <Route path="/favourites/" element={<Favourites />} />
        <Route path="/recipe/:name" element={<RecipeDetails/>}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </PagesCountainer>
  )
}

export default Pages;
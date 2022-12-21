import {Route, Routes} from 'react-router-dom';
import { GlobalContext } from '../context/Globalstate';
import React, {useContext} from 'react';
import Home from '../pages/Home';
import Category from '../pages/Category';
import Searched from '../pages/Searched';
import Favourites from '../pages/Favourities';
import RecipeDetails from '../pages/RecipeDetails';
import ErrorPage from '../pages/ErrorPage';
import styled from 'styled-components';
import '../index.css';

const Pages = () => {

  const {isOpen} = useContext(GlobalContext);

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

const PagesCountainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 10px 0;
  
  height: ${({ isOpen }) => isOpen ? 'calc(100% - 80px)' : ''};
  overflow-y: ${({ isOpen }) => isOpen ? 'hidden' : ''};

  @media (max-width: 991px) {
    filter: ${({ isOpen }) => isOpen ? 'blur(8px)' : ''};
    }
`;

export default Pages;
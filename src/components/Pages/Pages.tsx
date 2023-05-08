import {Route, Routes} from 'react-router-dom';
import Home from 'pages/Home/Home';
import Category from 'pages/Category/Category';
import CategoriesList from 'pages/CategoriesList/CategoriesList';
import Searched from 'pages/Searched/Searched';
import Favourites from 'pages/Favourites/Favourites';
import RecipeDetails from 'pages/RecipeDetails/RecipeDetails';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import 'index.css';
import {PagesContainer} from './Pages.styled'
import { useThemeContext} from 'context/ThemeContext';

const Pages: React.FC = () => {

const {isOpen} = useThemeContext();

  return (
    <PagesContainer isOpen={isOpen}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:type" element={<Category />} />
        <Route path="/searched/:type" element={<Searched />} />
        <Route path="/favourites/" element={<Favourites />} />
        <Route path="/recipe/:name" element={<RecipeDetails />} />
        <Route path="/category" element={<CategoriesList />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </PagesContainer>
  )
}

export default Pages;
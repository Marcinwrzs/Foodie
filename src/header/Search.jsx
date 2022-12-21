import {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {FavouritesContext} from '../context/Globalstate';
import {FaSearch} from 'react-icons/fa';
import {Form} from './Search.styled';

const Search = () => {

  const {goPage} = useContext(FavouritesContext);
  const [recipe, setRecipe] = useState('');
  const navigate = useNavigate();
  
  const searchRecipe = (e) => {
    e.preventDefault();
    if(!recipe) return
    navigate('/searched/' + recipe);
    setRecipe('');
    goPage(false);
  }

  return (
    <Form onSubmit={searchRecipe}>
      <div>
        <FaSearch />
        <input type="text" placeholder='search for recipe' value={recipe} onChange={(e) => setRecipe(e.target.value)}/>
      </div>
    </Form>
  )
};

export default Search;
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';
import {Form} from './Search.styled';

import { useThemeContext} from 'context/ThemeContext';

const Search: React.FC = () => {

  const [recipe, setRecipe] = useState('');

  const {closeMenu} = useThemeContext();

  const navigate = useNavigate();
  const searchRecipe = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if(!recipe) return;
    navigate('/searched/' + recipe);
    setRecipe('');
    closeMenu();
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
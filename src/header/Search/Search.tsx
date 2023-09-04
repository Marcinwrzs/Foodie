import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';
import * as Styled from './Search.styled';
import { useThemeContext} from 'context/ThemeContext';
import { Paths } from 'components/Pages/Pages';

const Search: React.FC = () => {

  const [recipe, setRecipe] = useState<string>('');
  const {closeMenu} = useThemeContext();
  const navigate = useNavigate();
  
  const searchRecipe = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if(!recipe) return;
    navigate(Paths.Searched + recipe);
    setRecipe('');
    closeMenu();
  }

  return (
    <Styled.Input onSubmit={searchRecipe}>
      <div>
        <FaSearch />
        <input type="text" placeholder='search for recipe' value={recipe} onChange={(e) => setRecipe(e.target.value)}/>
      </div>
    </Styled.Input>
  )
};

export default Search;
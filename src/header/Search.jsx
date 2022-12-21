import {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { GlobalContext } from '../context/Globalstate';
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';

const Search = () => {

  const {goPage} = useContext(GlobalContext);
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

const Form = styled.form`
  @media (max-width: 991px) {
    margin: 0 auto;
    width: 80%;
  }

  div {
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    width: 200px;
    line-height: 20px;
    outline: none;
    border-radius: 1rem;
    height: 35px;
    padding-left: 40px;
      
    @media (max-width: 991px) {
      border: 1px solid black;
      width: 100%;
    }
  }

  svg {
    display: flex;
    align-self: center;
    color: black;
    margin-left: 10px;
    position: absolute;
    font-size: 15px;
  }
`;

export default Search;
import { useContext } from 'react';
import { GlobalContext } from '../context/Globalstate';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineStar, AiOutlineClose } from "react-icons/ai";

const Recipe = ({item, className}) => {

  const {addRecipeToFavourites, favourites, removeRecipeFromFavourites} = useContext(GlobalContext);

  let savedRecipe = favourites.find(recipe => recipe.id === item.id);
  const isRecipeSaved = savedRecipe ? true : false;

  return (
    <Srecipe className={className}>
      <Link to={'/recipe/' + item.id}>
        <img src={item.image} alt={item.title} />
        <h4>{item.title}</h4>
      </Link>
      <FavButton onClick={() => addRecipeToFavourites(item)} disabled={isRecipeSaved}><AiOutlineStar /></FavButton>
      <DelButton onClick={() => removeRecipeFromFavourites(item.id)} disabled={!isRecipeSaved}><AiOutlineClose /></DelButton>
    </Srecipe>
  )
};

const Srecipe = styled.div`
  padding: 0 10px;
  margin: 15px 10px;
  text-align: center;
  position: relative;
  cursor: pointer;
  height: 320px;
  width: 400px;
  padding-bottom: 5px;

  @media (max-width: 768px) {
    height: 240px;
    width: 280px;
  }

  @media (max-width: 300px) {
    height: 200px;
    width: 220px;
  }
  
  img {
    width: 100%;
    height: 80%;
    max-width: 400px;
    border: 2px solid black;
    border-radius: 20px;
    object-fit: fill;
  }

  h4 {
    color: #62a5a1;
  }

  &:hover {
    button {
      display: block;
    }
  }  
`;

const FavButton = styled.button`
  background-color: black;
  border: 1px solid black;
  border-radius: 10px;
  width: 40px;
  height: 35px;
  cursor: pointer;
  opacity: 0.4;
  position: absolute;
  top: 3%;
  right: 20%;
  display: none;
  font-size: 20px;
  color: white;

  &:hover {
    color: #62a5a1;
    opacity: 1;
  }

  &:disabled {
    opacity: 0.1;
  }
`;

const DelButton = styled.button`
  background-color: black;
  border: 1px solid black;
  border-radius: 10px;
  width: 40px;
  height: 35px;
  cursor: pointer;
  opacity: 0.4;
  position: absolute;
  top: 3%;
  right: 5%;
  display: none;
  font-size: 20px;
  color: white;

  &:hover {
    color: #62a5a1;
    opacity: 1;
  }

  &:disabled {
    opacity: 0.1;
  }
`;

export default Recipe;
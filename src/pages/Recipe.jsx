import { useContext } from 'react';
import { FavouritesContext } from '../context/Globalstate';
import { Link } from 'react-router-dom';
import { AiOutlineStar, AiOutlineClose } from 'react-icons/ai';
import {Srecipe, FavButton, DelButton} from './Recipe.styled';

const Recipe = ({item, className}) => {

  const {addRecipeToFavourites, favourites, removeRecipeFromFavourites} = useContext(FavouritesContext);

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

export default Recipe;
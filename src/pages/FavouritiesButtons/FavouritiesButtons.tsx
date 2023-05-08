import { Fragment, useMemo  } from 'react';
import { AiTwotoneStar, AiOutlineClose } from 'react-icons/ai';
import {ActionButton} from './FavouritiesButtons.styled';
import { useFavouritesContext } from "context/FavouritesContext";
import {RecipeTypes} from 'pages/Recipe/Recipe';

const FavouritiesButtons: React.FC<RecipeTypes> = ({ id }) => {

  const { favourites, addRecipeToFavourites , removeRecipeFromFavourites} = useFavouritesContext();

  const isSavedAsFavourite: boolean = useMemo<boolean>(
    () => Boolean(favourites.find((savedItem) => savedItem === id)),
    [id, favourites]
  );

  return (
    <Fragment>
        <ActionButton onClick={() => addRecipeToFavourites(id)} disabled={isSavedAsFavourite}><AiTwotoneStar /></ActionButton>
        <ActionButton onClick={() => removeRecipeFromFavourites(id)} disabled={!isSavedAsFavourite} ><AiOutlineClose /></ActionButton>
    </Fragment>
  )
}

export default FavouritiesButtons
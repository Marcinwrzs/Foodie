import { Fragment, useMemo } from "react";
import { AiTwotoneStar, AiOutlineClose } from "react-icons/ai";
import * as Styled from "./FavouritiesButtons.styled";
import { useFavouritesContext } from "context/FavouritesContext";
import { RecipeTypes } from "pages/Recipe/Recipe";
import { useTokenContext } from "context/tokenContext/useTokenContext";

const FavouritiesButtons = ({ id, image, title }: RecipeTypes) => {
  const {
    addRecipeToFavourites,
    removeRecipeFromFavourites,
    favouriteRecipesId,
  } = useFavouritesContext();

  const { accessToken } = useTokenContext();

  const isSavedAsFavourite: boolean = useMemo<boolean>(
    () => Boolean(favouriteRecipesId.find((savedItem) => savedItem == id)),
    [favouriteRecipesId, id]
  );

  return (
    <Fragment>
      <Styled.Button
        onClick={() => addRecipeToFavourites(id, image, title)}
        disabled={isSavedAsFavourite || !accessToken}
      >
        <AiTwotoneStar />
      </Styled.Button>
      <Styled.Button
        onClick={() => removeRecipeFromFavourites(id, image, title)}
        disabled={!isSavedAsFavourite || !accessToken}
      >
        <AiOutlineClose />
      </Styled.Button>
    </Fragment>
  );
};

export default FavouritiesButtons;

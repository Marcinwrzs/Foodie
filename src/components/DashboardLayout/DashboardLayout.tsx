import { useEffect } from 'react';
import * as Styled from './DashboardLayout.styled';
import { useFavouritesContext } from 'context/FavouritesContext';
import { Paths } from 'components/Pages/Pages';

const DashboardLayout: React.FC = () => {

  const {favouriteRecipesId, GetFavouritesFromApi} = useFavouritesContext();

  useEffect(() => {
    GetFavouritesFromApi();
  }, [GetFavouritesFromApi]);

  return (
  <Styled.OuterContainer>
    <h1>You have <span>{favouriteRecipesId.length}</span> favourite recipes</h1>
    {favouriteRecipesId.length ? <Styled.Link to={Paths.Favourites}>Check them!</Styled.Link> : ''}
  </Styled.OuterContainer>
  )
};

export default DashboardLayout;
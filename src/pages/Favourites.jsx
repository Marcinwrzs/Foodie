import {useContext} from 'react';
import {FavouritesContext} from '../context/Globalstate';
import Recipe from './Recipe';
import {FavWrapper, FavContainer} from './Favourites.styled'

const Favourities = () => {

  const {favourites} = useContext(FavouritesContext);

  return (
    <FavWrapper>
      <h1>Favourities</h1>
      <FavContainer>
        {favourites.length ? (
          favourites.map((item) => {
            return (
              <Recipe item={item} className='fav' key={item.id}/>  
            )
          }))
        : (
          <h1><span>Sorry,</span> You don't have any favourite recipe.</h1>
        )}
      </FavContainer>
    </FavWrapper>
  )
}

export default Favourities;
import {useContext} from 'react';
import { GlobalContext } from '../context/Globalstate';
import Recipe from './Recipe';
import styled from 'styled-components';

const Favourities = () => {

  const {favourites} = useContext(GlobalContext);

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

const FavWrapper = styled.div`
  text-align: center;
`;

const FavContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;

  h2 {
    margin-top: 30px;

    span {
      color: #62a5a1;
    }
  }
`;

export default Favourities;
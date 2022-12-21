import {useContext} from 'react';
import {FavouritesContext} from '../context/Globalstate';
import {GiCampCookingPot} from 'react-icons/gi';
import {LogoElement, Logolink} from './Logo.styled';

const Logo = () => {

  const {goPage} = useContext(FavouritesContext);

  return (
    <LogoElement>
      <Logolink to={'/'} onClick={goPage}>
          <GiCampCookingPot/>
          <h3>Foodie</h3>
      </Logolink>
    </LogoElement>
  )
};

export default Logo;
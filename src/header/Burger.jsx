import React, {useContext} from 'react';
import {FavouritesContext} from '../context/Globalstate';
import {StyledBurger} from './Burger.styled';

const Burger = () => {

  const {openCloseMenu, isOpen} = useContext(FavouritesContext);

  return (
      <StyledBurger isOpen={isOpen} onClick={openCloseMenu}>
        <div></div>
        <div></div>        
        <div></div>
      </StyledBurger>
  )
}



export default Burger;
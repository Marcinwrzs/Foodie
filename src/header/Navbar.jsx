import React, {useContext} from 'react';
import {FavouritesContext} from '../context/Globalstate';
import Search from './Search';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiChopsticks, GiBroccoli, GiCakeSlice} from 'react-icons/gi';
import {BsFillStarFill} from 'react-icons/bs';
import {Categories, Slink} from './Navbar.styled';

const Navbar = () => {

  const {isOpen, goPage} = useContext(FavouritesContext);

  return (
    <Categories isOpen={isOpen}>

      <Slink to={'/category/asian'} onClick={goPage}>
        <GiChopsticks />
        <h4>Asian</h4>
      </Slink>

      <Slink to={'/category/italian'} onClick={goPage}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>

      <Slink to={'/category/american'} onClick={goPage}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>

      <Slink to={'/category/vegetarian'} onClick={goPage}>
        <GiBroccoli />
        <h4>Vegetarian</h4>
      </Slink>

      <Slink to={'/category/dessert'} onClick={goPage}>
        <GiCakeSlice />
        <h4>Dessert</h4>
      </Slink>

      <Slink to={'/favourites'} onClick={goPage}>
        <BsFillStarFill/>
        <h4>Favourites</h4>
      </Slink>

      <Search />

    </Categories>
  )
};

export default Navbar;
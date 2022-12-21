import React, {useContext} from 'react';
import { GlobalContext } from '../context/Globalstate';
import {NavLink} from 'react-router-dom';
import Search from './Search';
import styled from 'styled-components';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiChopsticks, GiBroccoli, GiCakeSlice} from "react-icons/gi";
import { BsFillStarFill } from "react-icons/bs";

const Navbar = () => {

  const {isOpen, goPage} = useContext(GlobalContext);

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

const Categories = styled.div`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 991px) {
    flex-flow: column nowrap;
    background-color: rgba(98, 165, 161, 0.85);
    border-top: 1px solid black;
    position: absolute;
    top: 0;
    right: 0;
    height: calc(100% - 80px);
    overflow: hidden;
    min-height: 420px;
    z-index: 99;
    width: 100%;
    margin-top: 80px;
    padding: 20px;
    max-width: 100%;
    display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  }
`;

const Slink = styled(NavLink)`
  margin-right: 25px;
  display: flex;
  align-items: center;
  font-size: 15px;
  justify-content: center;
  color: white;
  text-decoration: none;

  @media (max-width: 991px) {
    color: #f8faf2;
    margin-top: 20px;
    order: 3;
    padding-top: 5px;
  }

  h4 {
    margin-left: 4px;
  }

  &.active {
    svg {
      color: #FFA500;
    }
  }
`;

export default Navbar;
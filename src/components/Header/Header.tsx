import React from 'react';
import Navbar from 'header/Navbar/Navbar';
import Logo from 'header/Logo/Logo';
import Burger from 'header/Burger/Burger';
import 'index.css';
import {Container, Navigation} from './Header.styled';

const Header: React.FC = () => {  
  return (
    <Navigation>
        <Container>
            <Logo />
            <Navbar />
            <Burger />
        </Container>
    </Navigation>
  )
}

export default Header;
import React from 'react';
import Navbar from 'header/Navbar/Navbar';
import Logo from 'header/Logo/Logo';
import Burger from 'header/Burger/Burger';
import 'index.css';
import * as Styled from './Header.styled';

const Header: React.FC = () => {  
  return (
    <Styled.Navigation>
        <Styled.Container>
            <Logo />
            <Navbar />
            <Burger />
        </Styled.Container>
    </Styled.Navigation>
  )
}

export default Header;
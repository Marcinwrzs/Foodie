import styled from 'styled-components';
import Navbar from '../header/Navbar';
import Logo from '../header/Logo';
import Burger from '../header/Burger';
import '../index.css';

function Header() {
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

const Navigation = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #62a5a1;
  max-width: 100%;
  top: 0;
  z-index: 2;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export default Header;
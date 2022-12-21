import Navbar from '../header/Navbar';
import Logo from '../header/Logo';
import Burger from '../header/Burger';
import '../index.css';
import {Container, Navigation} from './Header.styled';

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

export default Header;
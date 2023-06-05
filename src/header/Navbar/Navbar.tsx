import Search from 'header/Search/Search';
import {Navigation, Slink} from './Navbar.styled';
import Category from 'header/Category/Category';
import Login from 'header/Login/Login';
import { useThemeContext} from 'context/ThemeContext';

const Navbar: React.FC = () => {

const {isOpen, closeMenu} = useThemeContext();

  return (
    <Navigation isOpen={isOpen}>

      <Category />

      <Slink to={'/favourites'} onClick={closeMenu}>
        <h4>Favourites</h4>
      </Slink>

      <Login />
      <Search />

    </Navigation>
  )
};

export default Navbar;
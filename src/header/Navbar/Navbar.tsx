import Search from 'header/Search/Search';
import * as Styled from './Navbar.styled';
import Category from 'header/Category/Category';
import Login from 'header/Login/Login';
import Logout from 'header/Logout/Logout';
import { useThemeContext} from 'context/ThemeContext';
import UserPanel from 'header/UserPanel/UserPanel';
import { useTokenContext } from 'context/tokenContext/useTokenContext';
import { Paths } from 'components/Pages/Pages';

const Navbar: React.FC = () => {

  const {isOpen, closeMenu} = useThemeContext();
  const {accessToken} = useTokenContext();
  
    return (
      <Styled.Navigation isOpen={isOpen}>
        <Category />
        <Styled.Link to={Paths.Favourites} onClick={closeMenu}>
          <h4>Favourites</h4>
        </Styled.Link>
        {accessToken ? (
          <><UserPanel /> <Logout/> </>
        ) : <Login />}
        <Search />
      </Styled.Navigation>
  )
};

export default Navbar;
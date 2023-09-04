import * as Styled from './Logout.styled';
import { useThemeContext} from 'context/ThemeContext';
import { TbLogout } from "react-icons/tb";
import { tokenStorageKey } from 'context/tokenContext/TokenContextController';
import { useNavigate } from 'react-router-dom';
import { useTokenContext } from 'context/tokenContext/useTokenContext';
import { Paths } from 'components/Pages/Pages';

const Logout: React.FC = () => {

  const navigate = useNavigate();
  const { closeMenu } = useThemeContext();
  const { onTokenSave } = useTokenContext();
  
  const clearToken = (): void => {
    onTokenSave({
      newToken: '', 
      storeTokenInStorage: false
    });
    localStorage.removeItem(tokenStorageKey);
  };

  const logout = (): void => {
    clearToken();
    navigate(Paths.LogIn);
    closeMenu();
  };

  return (
    <Styled.LogoutPanel>
      <Styled.Button onClick={logout} >
        <TbLogout/>
      </Styled.Button>
    </Styled.LogoutPanel>
  )
};

export default Logout;
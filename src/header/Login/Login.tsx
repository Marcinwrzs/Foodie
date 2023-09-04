import { Paths } from 'components/Pages/Pages';
import * as Styled from './Login.styled';
import { useThemeContext} from 'context/ThemeContext';

const Login: React.FC = () => {

  const { closeMenu } = useThemeContext();

  return (
    <Styled.LoginPanel>
      <Styled.Link to={Paths.SignUp} onClick={closeMenu}>
        <h4>Sign Up</h4>
      </Styled.Link>
      
      <Styled.Link to={Paths.LogIn} onClick={closeMenu}>
        <h4>Log in</h4>
      </Styled.Link>
    </Styled.LoginPanel>
  )
};

export default Login;
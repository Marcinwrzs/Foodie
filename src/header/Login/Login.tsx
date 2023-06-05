import {LoginPanel , Slink} from './Login.styled';

const Login: React.FC = () => {
  return (
    <LoginPanel>
        <Slink to={'#'}>
            <h4>Sign up</h4>
        </Slink>
            <h4>/</h4>
        <Slink to={'#'}>
            <h4>Login</h4>
        </Slink>
    </LoginPanel>
  )
};

export default Login;
import * as Styled from './UserPanel.styled';
import { BiUser } from "react-icons/bi";
import { useThemeContext} from 'context/ThemeContext';
import { Paths } from 'components/Pages/Pages';

const UserPanel: React.FC = () => {
  
  const { closeMenu } = useThemeContext();

  return (
    <Styled.Link to={Paths.Dashboard} onClick={closeMenu}>
        <BiUser />
        <h4>Your account</h4>
    </Styled.Link>
  )
};

export default UserPanel;
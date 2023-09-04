import * as Styled from './Logo.styled';
import {MdOutlineFoodBank} from 'react-icons/md';
import { useThemeContext} from 'context/ThemeContext';
import { Paths } from 'components/Pages/Pages';

const Logo: React.FC = () => {

  const { closeMenu } = useThemeContext();

  return (
    <Styled.Logo>
      <Styled.Link to={Paths.Home} onClick={closeMenu}>
        <MdOutlineFoodBank/>
      </Styled.Link>
    </Styled.Logo>
  )
};

export default Logo;
import {LogoElement, Logolink} from './Logo.styled';
import {MdOutlineFoodBank} from 'react-icons/md';
import { useThemeContext} from 'context/ThemeContext';

const Logo: React.FC = () => {

  const { closeMenu } = useThemeContext();

  return (
    <LogoElement>
      <Logolink to={'/'} onClick={closeMenu}>
        <MdOutlineFoodBank/>
      </Logolink>
    </LogoElement>
  )
};

export default Logo;
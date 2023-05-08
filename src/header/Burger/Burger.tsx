import {StyledBurger} from './Burger.styled';
import { useThemeContext} from 'context/ThemeContext';

const Burger: React.FC = () => {

  const {isOpen, openCloseMenu} = useThemeContext();

  return (
    <StyledBurger isOpen={isOpen} onClick={openCloseMenu}>
      {[...Array(3)].map((item, index) => <div key={index}></div>)}
    </StyledBurger>
  )
}



export default Burger;
import * as Styled from './Burger.styled';
import { useThemeContext} from 'context/ThemeContext';

const Burger: React.FC = () => {

  const {isOpen, openCloseMenu} = useThemeContext();

  return (
    <Styled.Burger isOpen={isOpen} onClick={openCloseMenu}>
      {[...Array(3)].map((item, index) => <div key={index}></div>)}
    </Styled.Burger>
  )
}

export default Burger;
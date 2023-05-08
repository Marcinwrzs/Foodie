import {Slink} from './Category.styled';
import { useThemeContext} from 'context/ThemeContext';

const Category: React.FC = () => {

 const { closeMenu } = useThemeContext();

  return (
    <div>
      <Slink to={'/category'} onClick={closeMenu}>
          <h4>Categories</h4>
      </Slink>
    </div>
  )
}

export default Category;
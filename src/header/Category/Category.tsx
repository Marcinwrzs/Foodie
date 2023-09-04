import { Paths } from 'components/Pages/Pages';
import * as Styled from './Category.styled';
import { useThemeContext} from 'context/ThemeContext';

const Category: React.FC = () => {

 const { closeMenu } = useThemeContext();

  return (
    <div>
      <Styled.Link to={Paths.CategoriesList} onClick={closeMenu}>
          <h4>Categories</h4>
      </Styled.Link>
    </div>
  )
}

export default Category;
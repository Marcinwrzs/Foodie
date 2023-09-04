import * as Styled from './CategoriesList.styled';
import { Paths } from 'components/Pages/Pages';

const CategoriesList: React.FC = () => {

  return (
    <Styled.ListWrapper>
      <h1>Categories list </h1>
      <Styled.Link to={`${Paths.Category}asian`}>
        <img src='photos/asian.jpg' alt='asian' />
        <h4>Asian</h4>
      </Styled.Link>
      <Styled.Link to={`${Paths.Category}italian`}>
        <img src='photos/italian.jpg' alt='italian' />
        <h4>Italian</h4>
      </Styled.Link>
      <Styled.Link to={`${Paths.Category}american`}>
        <img src='photos/american.jpg' alt='american' />
        <h4>American</h4>
      </Styled.Link>
      <Styled.Link to={`${Paths.Category}salad`}>
        <img src='photos/salad.jpg' alt='salad' />
        <h4>Salad</h4>
      </Styled.Link>
      <Styled.Link to={`${Paths.Category}dessert`}>
        <img src='photos/dessert.jpg' alt='dessert' />
        <h4>Dessert</h4>
      </Styled.Link>
    </Styled.ListWrapper>
  )
};

export default CategoriesList;
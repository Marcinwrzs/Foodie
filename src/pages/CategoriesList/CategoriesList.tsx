import {ListWrapper, Slink} from './CategoriesList.styled';

const CategoriesList: React.FC = () => {

  return (
    <ListWrapper>
      <h1>Categories list </h1>

      <Slink to={'/category/asian'} >
        <img src='photos/asian.jpg' alt='asian' />
        <h4>Asian</h4>
      </Slink>

      <Slink to={'/category/italian'} >
        <img src='photos/italian.jpg' alt='italian' />
        <h4>Italian</h4>
      </Slink>

      <Slink to={'/category/american'} >
        <img src='photos/american.jpg' alt='american' />
        <h4>American</h4>
      </Slink>

      <Slink to={'/category/vegetarian'} >
        <img src='photos/vegetarian.jpg' alt='vegetarian' />
        <h4>Vegetarian</h4>
      </Slink>

      <Slink to={'/category/dessert'} >
        <img src='photos/dessert.jpg' alt='dessert' />
        <h4>Dessert</h4>
      </Slink>

    </ListWrapper>
  )
};

export default CategoriesList;
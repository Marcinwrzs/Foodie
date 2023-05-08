import { NavLink } from 'react-router-dom';
import {Srecipe, Title} from './Recipe.styled';
import FavouritiesButtons from 'pages/FavouritiesButtons/FavouritiesButtons';
import RatingStar from 'pages/RatingStar/RatingStar';

export interface RecipeTypes {
  className?: string;
  image: string;
  id: number;
  title: string;
}

const Recipe: React.FC<RecipeTypes> = ({ className, id, image, title}) => {

  return (
    <Srecipe className={className}>
      <NavLink to={'/recipe/' + id} >
        <img src={image} alt={title} />
      </NavLink>
      <Title>
        <h4>{title}</h4>
        <FavouritiesButtons id={id} image={image} title={title} />
      </Title>
      <RatingStar id={id}/>
    </Srecipe>
  )
};

export default Recipe;
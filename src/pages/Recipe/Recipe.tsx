import { NavLink } from 'react-router-dom';
import * as Styled from './Recipe.styled';
import FavouritiesButtons from 'pages/FavouritiesButtons/FavouritiesButtons';
import RatingStar from 'pages/RatingStar/RatingStar';
import { Paths } from 'components/Pages/Pages';

export interface RecipeTypes {
  className?: string;
  image: string;
  id: string;
  title: string;
}

const Recipe = ({ className, id, image, title}: RecipeTypes) => {
  
  return (
    <Styled.Recipe className={className}>
      <NavLink to={Paths.RecipeDetails + id} >
        <img src={image} alt={title} />
      </NavLink>
      <Styled.Title>
        <h4>{title}</h4>
        <FavouritiesButtons id={id} image={image} title={title} />
      </Styled.Title>
      <RatingStar id={id} />
    </Styled.Recipe>
  )
};

export default Recipe;
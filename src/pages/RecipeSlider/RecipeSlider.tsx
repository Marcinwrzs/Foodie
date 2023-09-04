import Recipe from 'pages/Recipe/Recipe';
import * as Styled from './RecipeSlider.styled';
import Slider from "react-slick";
import { BiLeftArrow, BiRightArrow} from "react-icons/bi";
import {RecipeTypes} from 'pages/Recipe/Recipe';

interface ButtonArrowProps extends React.HTMLProps<HTMLButtonElement> {
  icon: React.ReactNode,
}

interface RecipeSliderProps {
  popularRecipes: RecipeTypes[];
}

const ButtonArrow = ({onClick, className, icon}: ButtonArrowProps) => {
  return (
    <Styled.Button
    className={className}
    onClick={onClick}
    >
    {icon}
    </Styled.Button>
  );
}

const RecipeSlider = ({popularRecipes}: RecipeSliderProps) => {
  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <ButtonArrow icon={<BiLeftArrow/>} className='prev' />,
    nextArrow: <ButtonArrow icon={<BiRightArrow/>} className='next' />,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }, 
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },{
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
  ]
  };
  
  return (
      <Slider {...settings}>
        {popularRecipes.map(({id, image, title}) => {
          return (
            <Recipe className='main' key={id} id={id} image={image} title={title} />  
          )
        })}
      </Slider>
  )
}

export default RecipeSlider;
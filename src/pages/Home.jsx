import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Recipe from './Recipe';
import {Wrapper} from './Home.styled';

function Home() {

  const [popularRecipes, setPopularRecipes] = useState([]);

  const getPopular = async () => {
  const check = localStorage.getItem("popular");
  if(check) {
    setPopularRecipes(JSON.parse(check));
  } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=18`);
      if(api.status === 402) {
        return;
      } else {
        const data = await api.json();
        setPopularRecipes(data.recipes);
        localStorage.setItem("popular", JSON.stringify(data.recipes));
      }
    }
}

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div>
      {popularRecipes.length ? (
        <Wrapper>
          <h1>Popular recipes</h1>
          <Splide options={{
            arrows: true,
            pagination: false,
            perPage: 4,
            breakpoints: {
              970: {
                perPage: 1,
                perMove: 1
              },
              1320: {
                perPage: 2,
                perMove: 2
              },
              1780: {
                perPage: 3,
                perMove: 3
              },
            }
          }}> 
          {popularRecipes.map((item) => {
            return (
              <SplideSlide key={item.id} >
                <Recipe item={item} className='main'/>  
              </SplideSlide>
              )
            })}
          </Splide>
      </Wrapper>
      ) : (
      <Wrapper>
        <h1><span>Sorry! </span>Daily limit has been reached.</h1>
      </Wrapper>
      )}
    </div>
  )
}

export default Home;
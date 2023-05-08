import { useEffect, useState } from 'react';
import RecipeSlider from 'pages/RecipeSlider/RecipeSlider';
import { Wrapper } from './Home.styled';
import {RecipeTypes} from 'pages/Recipe/Recipe';
import { getPopular } from 'api/services/recipes';

const Home: React.FC = () => {

  const [popularRecipes, setPopularRecipes] = useState<RecipeTypes[]>([]);
  const [requestsLimitExceeded, setRequestsLimitExceeded] = useState<boolean>(false);

  const loadPopularRecipes = async (): Promise<void> => {

    const isSaved = localStorage.getItem('popular');

    if(isSaved) {
      setPopularRecipes(JSON.parse(isSaved));
    } else {
        try {
          const rawRecipes = await getPopular();
          setPopularRecipes(rawRecipes);
          setRequestsLimitExceeded(false)
          localStorage.setItem('popular', JSON.stringify(rawRecipes));
        } catch (error) {
          setRequestsLimitExceeded(true);
        }
      }
    }

  useEffect(() => {
    loadPopularRecipes();
  }, []);
  
  return (
    <Wrapper>
      {!requestsLimitExceeded ? (
        <>
          <h1>Popular recipes</h1>
          <RecipeSlider popularRecipes={popularRecipes} />
        </>
      ) : (
          <h1><span>Sorry! </span>Daily limit has been reached.</h1>
      )}
    </Wrapper>
  )
};

export default Home;

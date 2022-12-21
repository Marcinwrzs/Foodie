import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Recipe from './Recipe';
import {CatWrapper, CatContainer} from './Category.styled';

const Home = () => {

  const [category, setCategory] = useState([]);
  let params = useParams();

  const getRecipes = async (name) => {
    
    if(name === 'vegetarian') {
      const data = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegetarian`);
      if(data.status === 402) {
        setCategory(['error']);
      } else {
        const recipes = await data.json();
        setCategory(recipes.recipes);
      }
    } else if (name === 'dessert') {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&type=${name}`);
      if(data.status === 402) {
        setCategory(['error']);
      } else {
        const recipes = await data.json();
        setCategory(recipes.results);
      }
    } else {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
      if(data.status === 402) {
        setCategory(['error']);
      } else {
        const recipes = await data.json();
        setCategory(recipes.results);
      }
    }
  };

  useEffect(() => {
    getRecipes(params.type);
  }, [params.type]);

  return (
    <CatWrapper>
      <h1>{params.type.toUpperCase()}</h1>
      <div>
        {!category.includes("error") ? (
          <CatContainer>
          {category.map((item) => {
            return (
              <Recipe item={item} key={item.id}/>  
            )
          })}
          </CatContainer>
        ) : (
          <h1><span>Sorry! </span>Daily limit has been reached.</h1>  
        )}
      </div>
    </CatWrapper>
  )
};

export default Home;
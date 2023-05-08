import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Recipe from 'pages/Recipe/Recipe';
import {CatWrapper, CatContainer} from './Category.styled';
import {RecipeTypes} from 'pages/Recipe/Recipe';

import { getCategories, getVegetarian, getDessert} from 'api/services/recipes';

const Category: React.FC = () => {

  let params = useParams<string>();

  const [category, setCategory] = useState<RecipeTypes[]>([]);
  const [requestsLimitExceeded, setRequestsLimitExceeded] = useState<boolean>(false);

  const getRecipes = async (name: string): Promise<void> => {
    try {
      if(name === 'vegetarian') {
        setCategory(await getVegetarian());
      } else if (name === 'dessert') {
        setCategory(await getDessert(name));
      } else {
        setCategory(await getCategories(name));
      }
    } catch (error) {
      setRequestsLimitExceeded(true);
    }
  }

  useEffect(() => {
    params.type && getRecipes(params.type);
  }, [params.type]);

  return (
    <CatWrapper>
      {params.type && <h1>{ params.type.toUpperCase() }</h1>}
      <div>
        {!requestsLimitExceeded ? (
          <CatContainer>
          {category.map((item) => {
            return (
              <Recipe key={item.id} id={item.id} image={item.image} title={item.title}/>  
            )
          })}
          </CatContainer>
        ) : (
          <CatContainer>
            <h1><span>Sorry! </span>Daily limit has been reached.</h1>  
          </CatContainer>
        )}
      </div>
    </CatWrapper>
  )
};

export default Category;
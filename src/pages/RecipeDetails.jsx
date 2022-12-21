import { useEffect, useState, Fragment} from 'react';
import {useParams} from 'react-router-dom';
import '../index.css'
import {LoadingComponentContainer, LoadingComponent, DetailContainer, Button, DetailWrapper} from './RecipeDetails.styled';

function RecipeDetails() {

  let params = useParams()
    
  const [details, setDetails] = useState({});
  const [recipeInfo, setRecipeInfo] = useState('instructions');

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information/?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
  }
    
    
  useEffect(() => {
    fetchDetails()
  }, [params.name]) 

  return (
    <Fragment>
      {Object.keys(details).length > 0 ? (
          details.hasOwnProperty('title') ? (
            <DetailContainer>
              <h2>{details.title}</h2>
              <div className="summary">
                <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
              </div>
              
              <DetailWrapper>
                <div className="photo">
                  <img src={details.image} alt={details.title} />
                </div>        
                <div className="info">
                  <div className="buttons">
                    <Button 
                      onClick={() => setRecipeInfo('instructions')}
                      className={recipeInfo === 'instructions' ? 'active' : ''}>Instructions
                    </Button>
                    <Button 
                      onClick={() => setRecipeInfo('ingredients')}
                      className={recipeInfo === 'ingredients' ? 'active' : ''}>Ingredients
                    </Button>
                  </div>
                  {recipeInfo === 'instructions' && (
                    <div className="instructions">
                      <h4>Instructions</h4>
                      
                      {details.instructions ? <p dangerouslySetInnerHTML={{__html: details.instructions}}></p> : 'Sorry, we have missing data.'}
                    </div>
                  )}
                  {recipeInfo === 'ingredients' && (
                    <div className="ingredients">
                      <h4>Ingredients</h4>
                        <ul>
                          {details.extendedIngredients.map((ingredient, index) => (
                          <li key={index}>{ingredient.original}</li>
                          ))}
                        </ul>
                    </div>
                  )}
                </div>
              </DetailWrapper>
            </DetailContainer>
          ) : (
            <DetailWrapper>
              <h1><span>Sorry! </span>Daily limit has been reached.</h1>
            </DetailWrapper>
            )
        ) : (
      <LoadingComponentContainer>
        <LoadingComponent>
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </LoadingComponent>
      </LoadingComponentContainer>
        )}
    </Fragment>
    )
}

export default RecipeDetails;


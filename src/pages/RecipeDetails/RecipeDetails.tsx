import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'index.css';
import * as Styled from "./RecipeDetails.styled";
import RatingStar from 'pages/RatingStar/RatingStar'
import { getDetails } from 'api/services/recipes';

interface Ingredient {
  original: string;
}

interface DetailRecipe {
  title: string;
  summary: string;
  image: string;
  instructions: string;
  extractedIngredients: Ingredient[];
}

const mapRecipes = ( {original} : any ) => ({
  original
});

const RecipeDetails: React.FC = () => {

  let params = useParams();

  const [details, setDetails] = useState<DetailRecipe>({
    title: '',
    summary: '',
    image: '',
    instructions: '',
    extractedIngredients: [],
  });
  
  const [recipeInfo, setRecipeInfo] = useState<string>('instructions');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [requestsLimitExceeded, setRequestsLimitExceeded] = useState<boolean>(false);

  const fetchDetails = async (name: string): Promise<void> => {
    try {
      const { title, summary, image, instructions, extendedIngredients} = await getDetails(name);
      const extractedIngredients = extendedIngredients.map(mapRecipes);
      setDetails({ title, summary, image, instructions, extractedIngredients });
      setIsLoading(true);
    } catch(error) {
      setRequestsLimitExceeded(true);
    }
  };

  useEffect(() => {
    (params.name) && fetchDetails(params.name);
  }, [params.name]);

  return (
    <Styled.DetailContainer>
      {!requestsLimitExceeded ? (
        isLoading ? (
          <>
            <h2>{details.title}</h2>

            <RatingStar /* id={Number(params.name)} */ id={String(params.name)} />

            <div className="summary">
              <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            </div>

            <Styled.DetailWrapper>
              <div className="photo">
                <img src={details.image} alt={details.image} />
              </div>
              <div className="info">
                <div className="buttons">
                  <Styled.Button
                    onClick={() => setRecipeInfo("instructions")}
                    className={recipeInfo === "instructions" ? "active" : ""}
                  >
                    Instructions
                  </Styled.Button>
                  <Styled.Button
                    onClick={() => setRecipeInfo("ingredients")}
                    className={recipeInfo === "ingredients" ? "active" : ""}
                  >
                    Ingredients
                  </Styled.Button>
                </div>

              {recipeInfo === "instructions" ? (
                <div className="instructions">
                  <h4>Instructions</h4>
                  {details.instructions ? (
                    <p dangerouslySetInnerHTML={{ __html: details.instructions}}></p>
                  ) : (
                    "Sorry, we have missing data."
                  )}
                  </div>
                ) : (
                <div className="ingredients">
                <h4>Ingredients</h4>
                <ul>
                  {details.extractedIngredients.map((ingredient: any, id: number) => (
                    <li key={id}>{ingredient.original}</li>
                  ))}
                </ul>
              </div>
              )}
              </div>
            </Styled.DetailWrapper>
          </>
      ) : (
        <Styled.LoadingComponentContainer>
          <Styled.LoadingComponent>
            {[...Array(9)].map((item, index) => (<div key={index}></div>))}
          </Styled.LoadingComponent>
        </Styled.LoadingComponentContainer>
        )
      ) : (
        <h1><span>Sorry! </span>Daily limit has been reached.</h1> 
      )}
    </Styled.DetailContainer>
  );
}

export default RecipeDetails;
import { useEffect, useState, Fragment} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import '../index.css'

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

const LoadingComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30vh;
`;

const LoadingComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;

  div {
    width: 20px;
    height: 20px;
    margin: 5px;
    border-radius: 50%;
    background: #62a5a1;
    animation: loadingComponentAnimation 1s linear infinite;
  }

  div:nth-child(even) {
    animation-delay: 0.1s;
  }
  
  div:nth-child(odd) {
    animation-delay: 1s;
  }
  
  @keyframes loadingComponentAnimation {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

const DetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  .summary {
    color: black;
    padding: 0 2% 20px;
    text-decoration: none;
    text-align: justify;
    text-justify: inter-word;
    font-size: 15px;
    margin-top: 10px;

    p {
      border-top: 1px solid black;
      padding-top: 10px;
    }

    a:link {
      text-decoration: none;
      color: black;
      pointer-events: none;
    }
  }
`;

const Button = styled.button`
  width: 100px;
  height: 25px;
  border: 1px solid #62a5a1;
  background-color: white;
  color: #62a5a1;
  cursor: pointer;
  font-weight: bold;

  &.active {
    color: white;
    background-color: #62a5a1;
  }

  &:hover {
    color: white;
    background-color: #62a5a1;
  }
`;

const DetailWrapper = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .photo {
    height: 250px;
    width: 370px;

    img {
      height: 100%;
      width: 100%;
      min-height: 220px;
      min-width: 350px;
      object-fit: fill;
      border-radius: 10%;
      border: 2px solid black;
    }

    @media (max-width: 1200px) {
      height: 250px;
      width: 370px;
      display: flex;
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      height: 70%;
      width: 90%;
      max-height: 250px;
      max-width: 370px;
    }
  }

  .info {
    width: 80%;
    margin-left: 50px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    width: 100%;

    p, ul {
      border-top: 1px solid black;
      padding-top: 5px;
    }

    .buttons {
      display: flex;
      width: 80%;
      margin: 0 auto;
      align-items: space-around;
      justify-content: space-around;
    }

    @media (max-width: 768px) {
      margin: 20px auto;
      
      .instructions, .ingredients {
        margin-left: 30px;
      }
    }

    h2 {
    text-align: left;

      @media (max-width: 768px) {
      order: 1;
      }
    }
  }
`;

export default RecipeDetails;


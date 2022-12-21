import {Fragment, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Recipe from './Recipe';
import styled from 'styled-components';

const Searched = () => {

  let params = useParams();
  const [searched, setSearched] = useState([]);

  const getSearched = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);

    if(data.status === 402) {
      setSearched(['error']);
    } else {
      const recipes = await data.json();
      setSearched(recipes.results);
    }
  }

  useEffect(() => {
    getSearched(params.type);
  }, [params.type]);
  
  return (
    <Fragment>
      {!searched.includes('error') ? (
        searched.length ? (
          <FavContainer>
            {searched.map((item) => {
              return (
                <Recipe item={item} key={item.id}/>  
              )
            })}
          </FavContainer>
        ) : (
          <FavErrContainer>
            <h1><span>Sorry,</span> we don't have this recipe.</h1>
          </FavErrContainer>
        )
      ) : (
        <FavErrContainer>
          <h1><span>Sorry! </span>Daily limit has been reached.</h1>
        </FavErrContainer>
      )}
    </Fragment>
  )
}

const FavErrContainer = styled.div`
  text-align: center;
  padding-top: 50px;

  span {
    color: #62a5a1;
  }
`;

const FavContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export default Searched;
import styled from 'styled-components';

export const Recipe = styled.div`
  position: relative;
  margin: 15px 10px 0 10px;
  max-width: 340px;
  height: 340px;

  @media (max-width: 300px) {
    height: 200px;
    width: 220px;
  }

  img {
    cursor: pointer;
    height: 250px;
    width: 340px;
    max-width: 400px;
    border-radius: 2px;
    object-fit: cover;

    &:hover {
      box-shadow: 1px 1px 7px gray;
    }
  }

  h4 {
    text-align: center;
    padding: 0 2px 0 10px;
  }

  h5 {
    margin-top: 2px;
  }
`;

export const Title = styled.div`
  display: flex;

  h4 {
    width: 80%;
    text-align: left;
  }
`;
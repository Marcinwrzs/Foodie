import styled from 'styled-components';

export const Srecipe = styled.div`
  padding: 0 10px;
  margin: 15px 10px;
  text-align: center;
  position: relative;
  cursor: pointer;
  height: 320px;
  width: 400px;
  padding-bottom: 5px;

  @media (max-width: 768px) {
    height: 240px;
    width: 280px;
  }

  @media (max-width: 300px) {
    height: 200px;
    width: 220px;
  }

  img {
    width: 100%;
    height: 80%;
    max-width: 400px;
    border: 2px solid black;
    border-radius: 20px;
    object-fit: fill;
  }

  h4 {
    color: #62a5a1;
  }

  &:hover {
    button {
      display: block;
    }
  }  
`;

export const FavButton = styled.button`
  background-color: black;
  border: 1px solid black;
  border-radius: 10px;
  width: 40px;
  height: 35px;
  cursor: pointer;
  opacity: 0.4;
  position: absolute;
  top: 3%;
  right: 20%;
  display: none;
  font-size: 20px;
  color: white;

  &:hover {
    color: #62a5a1;
    opacity: 1;
  }

  &:disabled {
    opacity: 0.1;
  }
`;

export const DelButton = styled.button`
  background-color: black;
  border: 1px solid black;
  border-radius: 10px;
  width: 40px;
  height: 35px;
  cursor: pointer;
  opacity: 0.4;
  position: absolute;
  top: 3%;
  right: 5%;
  display: none;
  font-size: 20px;
  color: white;

  &:hover {
    color: #62a5a1;
    opacity: 1;
  }

  &:disabled {
    opacity: 0.1;
  }
`;
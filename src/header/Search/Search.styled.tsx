import styled from 'styled-components';

export const Input = styled.form`
  @media (max-width: 991px) {
    margin: 0 auto;
    width: 80%;
  }

  div {
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    width: 200px;
    line-height: 20px;
    outline: none;
    border-radius: 1rem;
    height: 35px;
    padding-left: 40px;
      
    @media (max-width: 991px) {
      border: 1px solid black;
      width: 100%;
    }
  }

  svg {
    display: flex;
    align-self: center;
    color: black;
    margin-left: 10px;
    position: absolute;
    font-size: 15px;
  }
`;
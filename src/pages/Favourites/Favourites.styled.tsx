import styled from 'styled-components';

export const FavWrapper = styled.div`
  text-align: center;
`;

export const FavContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  
  h1 {
    margin-top: 20px;

    span {
      color: #62a5a1;
    }
  }
`;

export const LoadingComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30vh;
`;

export const LoadingComponent = styled.div`
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
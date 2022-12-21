import styled from 'styled-components';

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <h1><span>Sorry! </span>Page not found</h1>  
    </ErrorContainer>
  )
};

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

export default ErrorPage;
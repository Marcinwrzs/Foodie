import * as Styled from './ErrorPage.styled';

const ErrorPage: React.FC = () => {
  return (
    <Styled.ErrorContainer>
      <h1><span>Sorry! </span>Page not found</h1>  
    </Styled.ErrorContainer>
  )
};

export default ErrorPage;
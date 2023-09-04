import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from "./context/ThemeContext";
import FavouritesProvider from "./context/FavouritesContext";
import Header from './components/Header/Header';
import Pages from './components/Pages/Pages';
import * as Styled from './App.styled';
import { TokenContextController } from 'context/tokenContext/TokenContextController';

const App = () => {
  
  return (
    <TokenContextController>
      <ThemeProvider>
        <FavouritesProvider>
          <BrowserRouter>
            <Styled.AppWrapper>
              <Header />
              <Pages />
            </Styled.AppWrapper>
          </BrowserRouter>
        </FavouritesProvider>
      </ThemeProvider>
    </TokenContextController>
  );
}

export default App;
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from "./context/ThemeContext";
import FavouritesProvider from "./context/FavouritesContext";
import Header from './components/Header/Header';
import Pages from './components/Pages/Pages';
import { AppWrapper } from './App.styled';

const App = () => {
  return (
    <ThemeProvider>
      <FavouritesProvider>
        <BrowserRouter>
          <AppWrapper>
            <Header />
            <Pages />
          </AppWrapper>
        </BrowserRouter>
      </FavouritesProvider>
    </ThemeProvider>
  );
}

export default App;
import {BrowserRouter} from 'react-router-dom';
import { GlobalProvider } from './context/Globalstate';
import Header from './components/Header';
import Pages from './components/Pages';
import {AppWrapper} from './App.styled';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <AppWrapper>
            <Header />
            <Pages />
        </AppWrapper>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
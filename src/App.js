import {BrowserRouter} from 'react-router-dom';
import { GlobalProvider } from './context/Globalstate';
import Header from './components/Header';
import Pages from './components/Pages';
import styled from 'styled-components';

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

const AppWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: -webkit-fill-available;
`;

export default App;
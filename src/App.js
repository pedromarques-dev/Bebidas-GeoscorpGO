import { createGlobalStyle } from 'styled-components'
import { Provider } from './context';
import { AppRoutes } from './pages/routes';

function App () {

  
  return (
    <>
      <GlobalStyle />
      <Provider>
        <AppRoutes />
      </Provider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    img {
      max-width: 100px;
      max-height: 150px;
    }

    li {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: white;
    }

    button {
      border-style: none;
      cursor: pointer;
    }
  

`


export default App
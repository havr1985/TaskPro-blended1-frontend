import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './GlobalStyle.js'
import { ThemeProvider } from 'styled-components'
import { Conteiner } from './shared/Container/Conteiner.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <BrowserRouter basename='/TaskPro-blended1-frontend'>
        <Conteiner>
          <App />
        </Conteiner>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);

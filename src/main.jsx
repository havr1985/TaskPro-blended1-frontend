import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './GlobalStyle.js'
import { ThemeProvider } from 'styled-components'
import { Conteiner } from './shared/Container/Conteiner.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <Conteiner>
        <App />
      </Conteiner>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);

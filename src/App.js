import React, { useState } from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";

import { ThemeProvider } from "styled-components";
import { claro, escuro } from "./Components/UI/temas";

function App() {
  const [theme, setTheme] = useState(false);
  return (
    <ThemeProvider theme={theme ? claro : escuro}>
      <GlobalStyle />
      <Cabecalho theme={theme} func={setTheme}/>
      <Container />
    </ThemeProvider>
  );
}

export default App;

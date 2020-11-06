import React, { useState } from "react";
import { Provider } from "./context/AppContext";
import CustomRouter from "./CustomRouter";
import { BrowserRouter } from "react-router-dom";
import config from "./config.json";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import dark from "./ThemeDark.json";
import light from "./ThemeLight.json";


const Wrapper = styled.div`
  margin: 0;
  direction: rtl;
  background-color: #121212;
  color: #e8feff;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
`;

const App = () => {
  const [theme, setTheme] = useState(dark);
  document.title = config.siteName;
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <BrowserRouter>
          <Wrapper>
            {/* <div onClick={() => setTheme(theme === dark ? light : dark)}>
              change theme
            </div> */}
            <CustomRouter />
          </Wrapper>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default App;

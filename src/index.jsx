import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import WorkExperience from "./sections/WorkExperience";
import { theme } from "./styles";

const App = () => (
  <>
    <BaseStyles />
    <AppContainer>
      <Sidebar />
      <div>
        <About />
        <WorkExperience />
        <Skills />
        <Projects />
      </div>
    </AppContainer>
  </>
);

export default App;

const AppContainer = styled.div`
  height: 100vh;
  display: flex;

  > div:nth-child(2) {
    flex: 1;

    overflow-y: auto;
  }

  @media (max-width: 800px) {
    display: block;
  }
`;

const BaseStyles = createGlobalStyle`  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;

    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;

    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
    background-color: ${theme.colors.body};
  }
`;

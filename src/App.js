import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import Navbar from "./components/Navbar";
import {darkTheme} from '../src/utils/Themes'
import Hero from "./components/section/Hero";
import Skills from "../src/components/section/Skills";
import Experience from "./components/section/Experience";
import Education from "./components/section/Education";
import StyledStarsCanvas from "./components/canvas/Star";
import Projects from "./components/section/Projects";
import EarthCanvas from "./components/canvas/Earth";
import Contact from "./components/section/Contact";
// import SpaceWarScene from "./components/canvas/space";
// import { Canvas } from "@react-three/fiber";
// import { Stars } from "@react-three/drei";

const Body = styled.div`
width:100%;
  background-color:${({theme})=>theme.bg};
  color:${({theme})=>theme.text_primary};
  overflow-x:hidden;
  position:relative;
`
const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
      <Navbar />
      <Body>  
      {/* <StyledStarsCanvas />  */}
      
        <div>   
        <Hero />
      <Wrapper>
      <Skills />
      <Experience />
      </Wrapper>
      <Projects />
      <Wrapper>
      <Education />
      <Contact />
      </Wrapper>
      </div>  
     
      </Body>  
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;

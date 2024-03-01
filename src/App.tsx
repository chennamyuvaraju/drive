import './App.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme } from './theme'; // Import your theme
import { ChakraProvider } from '@chakra-ui/react'

//components
import Header from './components/Header';
import NavBar from './components/Navbar';
import Carousal from './components/Carousal';
import Testimonial from './components/Testimonial';
import Features from './components/Features';
import Accordian from './components/Accordian';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 20px;
  }
`;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <ChakraProvider>
       <GlobalStyle />
        <Header/>
        <NavBar/>
        <Carousal/>
        <Features/>
        <Accordian/>
        <Testimonial/>
        <Footer/>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;

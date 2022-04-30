import React from 'react';
import { Container } from './components/styles/Container.styled';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/styles/Global'
import { Content } from './Content';
import Card from './components/Card';



const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
    gia: 'red'
  },
  mobile: '768px',
}



function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Container>
          {Content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;

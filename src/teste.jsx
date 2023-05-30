/* ALGUMAS UTILIZAÇÕES DO STYLED COMPONENTS

import React from 'react';
import ReactDOM from 'react-dom/client';
import styled, { ThemeProvider, css } from 'styled-components';
// import Home from './templates/App';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyles';

const changeBackground = (theme, bg) => css`
  background: ${bg};
  color: #000;
`;

const Heading = styled.h1`
  color: white;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primaryColor};

  ${({ theme, bg }) => css`
    color: ${theme.colors.white};
    ${changeBackground(theme, bg)}
  `}
`;

export const Container2 = styled(Container).attrs({ as: 'article' })`
  background: blue;

   article>h1 alterou-se a cor do Heading dentro do Container2
  ${Heading} {
    color: yellow;
  }

   article.h1 alterou a cor ao passar o mouse
  ${Heading}:hover {
    color: brown;
  }

   article:hover o & se refere ao elemento do estilo que está sendo alterado
  &:hover {
    background: pink;
  }
`;
// Esse attrs alterou do Container a div para article

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Container bg="red">
        <Heading>OI</Heading>
      </Container>
      <Container2 bg="red">
        <Heading>OI</Heading>
      </Container2>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);

*/

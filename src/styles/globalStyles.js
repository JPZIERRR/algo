/* COMEÇANDO COM STYLED COMPONENTS (GLOBALSTYLE)
import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

body {
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
  `}
}

`;
*/

import { createGlobalStyle } from 'styled-components';

////////////////////////////////////////////////////////

/* Algumas utilizações do styled

export const GlobalStyles = createGlobalStyle`
* {
  margin: 15px 0;
  padding: 0;
}
`;
*/

export const GlobalStyles = createGlobalStyle`

* {
  margin: 15px 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.font.family.default}
}

h1, h3, h4, h5, h6 {
  font-family: ${({ theme }) => theme.font.family.secondary};
}
`;

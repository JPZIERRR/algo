/* TEMAS STYLED COMPONENTES (criar temas que são como variáveis css)
export const theme = {
  colors: {
    primaryColor: 'grey',
    mainBg: 'red',
    secondaryBg: 'blue',
    white: '#fff',
  },
  fonts: {},
  spacings: {},
};
*/

export const theme = {
  colors: {
    primaryColor: '#0A1128',
    secondaryColor: '#dc143c',
    white: '#fff',
    mediumGray: '#DDDDDD',
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
      secondary: "'Montserrat', sans-serif",
    },
    size: {
      xsmall: '8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.2rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.2rem',
  },
};

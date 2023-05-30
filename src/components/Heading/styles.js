import styled, { css } from 'styled-components';

const titleSize = {
  small: theme => css`
    font-size: ${theme.font.size.medium};
  `,
  medium: theme => css`
    font-size: ${theme.font.size.large};
  `,
  big: theme => css`
    font-size: ${theme.font.size.xlarge};
  `,
  huge: theme => css`
    font-size: ${theme.font.size.xhuge};
    ${mediaFont(theme)}
  `,
};

const mediaFont = theme => css`
  @media (max-width: 768px) {
    font-size: ${theme.font.size.xlarge};
  }
`;

const titleCase = uppercase => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, darkColor, size, uppercase }) => css`
    color: ${darkColor ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)};
    ${titleCase(uppercase)}
  `}
`;

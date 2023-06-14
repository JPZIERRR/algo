import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.font.size.small};
    padding: ${theme.spacings.small};
    color: ${theme.colors.primaryColor};
    position: relative;
    height: 6rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 20%;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.secondaryColor};
      transition: all 200ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;

import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    background: ${theme.colors.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 6;
    color: ${theme.colors.white};
    border-radius: 2rem;
  `}
`;

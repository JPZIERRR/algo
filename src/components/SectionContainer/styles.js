import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacings.large};
  `}
`;

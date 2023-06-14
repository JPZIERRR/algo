import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.mediumGray};
    a {
      color: inherit;
      text-decoration: none;
      font-size: ${theme.font.size.medium};
    }

    & ${SectionContainer} {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  `}
`;

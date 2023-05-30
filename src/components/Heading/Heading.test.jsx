import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.size.xhuge,
      'text-transform': 'none',
    });
  });
  it('should render with white color', () => {
    renderTheme(<Heading darkColor={false}>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });
  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.size.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">Texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Texto' })).toHaveStyle({
      'font-size': theme.font.size.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">Texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Texto' })).toHaveStyle({
      'font-size': theme.font.size.xhuge,
    });
  });

  it('should render correct font-size when using mobile', () => {
    const { rerender } = renderTheme(<Heading size="huge">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(screen.getByRole('heading', { name: 'Texto' })).toHaveStyleRule(
      'font-size',
      theme.font.size.xlarge,
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});

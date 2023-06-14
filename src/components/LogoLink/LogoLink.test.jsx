import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text={'Olá'} />);
    const heading = screen.getByRole('heading', { name: 'Olá' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });
  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá" srcImg="image.jpg" />);
    const heading = screen.getByRole('heading', { name: 'Olá' });
    expect(screen.getByAltText('Olá')).toHaveAttribute('src', 'image.jpg');
  });
});

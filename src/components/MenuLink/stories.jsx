import { MenuLink } from '.';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'Menu Link',
    link: 'https://google.com.br',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Templates = args => {
  return (
    <div style={{ display: 'flex' }}>
      <MenuLink {...args} />
    </div>
  );
};

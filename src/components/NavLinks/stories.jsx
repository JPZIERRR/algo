import { NavLinks } from '.';
import links from './mock';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links: links,
  },
  argTypes: {
    links: { type: '' },
  },
};

export const Templates = args => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};

import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

// export const template = args => <Heading {...args} />;
export const Light = args => <Heading {...args} />;
export const Dark = args => <Heading {...args} />;

Light.args = {
  darkColor: true,
};

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'O texto está claro',
  darkColor: false,
};

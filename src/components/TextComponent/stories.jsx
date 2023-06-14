import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae aperiam enim iusto cum sit, accusantium sapiente veniam eveniet corrupti dignissimos similique totam non eos blanditiis quis quisquam numquam nobis provident.',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Templates = args => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};

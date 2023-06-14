import { GridImage } from '.';
import mock from './mock';

export default {
  title: 'GridImage',
  component: GridImage,
  args: mock,
};

export const Templates = args => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};

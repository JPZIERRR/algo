import { Base } from '.';
import { mockBase } from './mock';

export default {
  title: 'Templates/Base',
  component: Base,
  args: mockBase,
};

export const Templates = args => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};

import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="https://instagram.com/jpzierrr">Feito por João Pedro Fornazier</a></p>`,
  },
};

export const Templates = args => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};

import ShareKit from "./ShareKit";

export default {
  title: "ShareKit",
  component: ShareKit,
};

const Template = (args) => <ShareKit {...args} />;

export const Title = Template.bind({});
Title.args = {
  banner: "https://www2.duloren.com.br/p/sunrise/Banner-galeria.jpg",
};

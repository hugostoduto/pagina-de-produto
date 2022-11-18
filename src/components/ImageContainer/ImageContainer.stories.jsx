import ImageContainer from "./ImageContainer";

export default {
  title: "ImageContainer",
  component: ImageContainer,
};

const Template = (args) => <ImageContainer {...args} />;

export const Videos = Template.bind({});
Videos.args = {
  images: [
    {
      image: "http://www2.duloren.com.br/p/brenda/831311/831311.mp4",
      id: 1,
    },
    {
      image: "http://www2.duloren.com.br/p/brenda/831311/831311057_057-01.jpg",
      id: 2,
    },
    {
      image: "http://www2.duloren.com.br/p/brenda/831311/831311057_057-02.jpg",
      id: 3,
    },
  ],
};

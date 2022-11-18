import ProductImage from "../components/ProductImage/ProductImage";

export default {
  title: "ProductImage",
  component: ProductImage,
};

const Template = (args) => <ProductImage {...args} />;

export const video = Template.bind({});
video.args = {
  pdpImage: "https://www2.duloren.com.br/p/brenda/838314/838314.mp4",
};
export const image = Template.bind({});
image.args = {
  pdpImage:
    "	https://www2.duloren.com.br/p/lasercontrol/728533/static/media/Story-FeedStory-1.250349cc.jpg",
};

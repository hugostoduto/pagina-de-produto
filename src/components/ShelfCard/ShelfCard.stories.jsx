import React from "react";
import ShelfCard from "./ShelfCard";

export default {
  title: "ShelfCard",
  component: ShelfCard,
};

const Template = (args) => <ShelfCard {...args} />;

export const shelf = Template.bind({});
shelf.args = {
  productName: "Body em Tule e Renda Jasmine Perle",
  productLink: "Body em Tule e Renda Jasmine Perle",
  productImage:
    "https://www2.duloren.com.br/p/brenda/831311/831311057_057-01.jpg",
  productCollection: "Jasmine",
  productReference: 831330,
};

import React from "react";
import ShelfDisplay from "./ShelfDisplay";

export default {
  title: "ShelfDisplay",
  component: ShelfDisplay,
};

const Template = (args) => <ShelfDisplay {...args} />;

export const shelf = Template.bind({});
shelf.args = {
  banner: "http://www2.duloren.com.br/p/brenda/Banner-galeria.jpg",
  product: [
    {
      image: "http://www2.duloren.com.br/p/brenda/831311/831311057_057-01.jpg",
      link: "http://www2.duloren.com.br/p/brenda/831311/831311057_057-01.jpg",
      name: "Sutiã Push Up Rendado",
      ref: 83132,
    },
    {
      image: "http://www2.duloren.com.br/p/brenda/831311/831311057_057-01.jpg",
      link: "http://www2.duloren.com.br/p/brenda/831311/831311057_057-01.jpg",
      name: "Sutiã Push Up Rendado",
      ref: 83134,
    },
    {
      image: "http://www2.duloren.com.br/p/brenda/831311/831311057_057-01.jpg",
      link: "http://www2.duloren.com.br/p/brenda/831311/831311057_057-01.jpg",
      name: "Sutiã Push Up Rendado",
      ref: 83135,
    },
    {
      image: "http://www2.duloren.com.br/p/brenda/831311/831311057_057-01.jpg",
      link: "http://www2.duloren.com.br/p/brenda/831311/831311057_057-01.jpg",
      name: "Sutiã Push Up Rendado",
      ref: 83135,
    },
    {
      image: "http://www2.duloren.com.br/p/brenda/831311/831311057_057-01.jpg",
      link: "http://www2.duloren.com.br/p/brenda/831311/831311057_057-01.jpg",
      name: "Sutiã Push Up Rendado",
      ref: 83135,
    },
  ],
};

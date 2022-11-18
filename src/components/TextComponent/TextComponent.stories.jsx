import React from "react";
import { TextComponent } from "./TextComponent";

export default {
  title: "TextComponent",
  component: TextComponent,
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In accusamus aliquam esse laborum ipsam, soluta omnis! Hic perspiciatis, molestiae, omnis rerum ullam enim dicta vitae veritatis illo deleniti, rem modi?",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};

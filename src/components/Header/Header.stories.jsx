import React from "react";
import { Header } from "./Header";

export default {
  title: "Header",
  component: Header,
  args: {
    children: "Header",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Header {...args} />
    </div>
  );
};

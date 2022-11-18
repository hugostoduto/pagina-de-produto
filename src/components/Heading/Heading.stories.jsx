import React from "react";
import { Heading } from "./Heading";

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: "Coleção Brenda",
  },
};

export const Template = (args) => <Heading {...args} />;

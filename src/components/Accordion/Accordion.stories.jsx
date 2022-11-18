import React from "react";
import { Accordion } from "./Accordion";

export default {
  title: "Accordion",
  component: Accordion,
  args: {
    children: "Accordion",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Accordion {...args} />
    </div>
  );
};

import React from "react";
import { MenuMobile } from "./MenuMobile";

export default {
  title: "MenuMobile",
  component: MenuMobile,
  args: {
    children: "MenuMobile",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <MenuMobile {...args} />
    </div>
  );
};

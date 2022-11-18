import React from "react";
import { TableSizes } from "./TableSizes";

export default {
  title: "TableSizes",
  component: TableSizes,
  args: {
    children: "TableSizes",
    banner: "",
  },
  argTypes: {
    children: { type: "string" },
    banner: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TableSizes {...args} />
    </div>
  );
};

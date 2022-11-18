import React from "react";
import { PdfPage } from "./PdfPage";

export default {
  title: "PdfPage",
  component: PdfPage,
  args: {
    images: [
      {
        image:
          "http://www2.duloren.com.br/p/brenda/831311/831311057_057-01.mp4",
        id: 2,
      },
      {
        image:
          "http://www2.duloren.com.br/p/brenda/831311/831311057_057-01.jpg",
        id: 2,
      },
      {
        image:
          "http://www2.duloren.com.br/p/brenda/831311/831311057_057-02.jpg",
        id: 3,
      },
    ],
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <PdfPage {...args} />
    </div>
  );
};

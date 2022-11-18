import ProductTitle from "./ProductTitle";

export default {
  title: "ProductTitle",
  component: ProductTitle,
};

const Template = (args) => <ProductTitle {...args} />;

export const Title = Template.bind({});
Title.args = {
  productName: "Body em Tule e Renda Jasmine Perle",
  productCollection: "Jasmine",
  productReference: 831330,
  productDescription:
    "Sutiã sem Bojo Estruturado, Mas Busto em Malha Sensorial e Delicado Tule Poá. Arco No Subbusto Modela e Dá a Sustentação Ideal. Modelagem Estilo Brallete Super em Alta Usar Como Outwear. Alças Reguláveis",
  productColors: [
    { code: "Argile Rose | 57", cor: "#aa7a6c", fontColor: "#ffffff" },
    { code: "Preto | 11", cor: "#000000", fontColor: "#ffffff" },
    { code: "Branco | 04", cor: "#ffffff", fontColor: "#000000" },
  ],
  productSizes: [
    {
      code: "p",
    },
    {
      code: "m",
    },
    {
      code: "g",
    },
  ],
};

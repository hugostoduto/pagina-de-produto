import * as Styled from "./styles";
import ImageContainer from "../../components/ImageContainer/ImageContainer";
import ProductTitle from "../../components/ProductTitle/ProductTitle";
import TableSizes from "../../components/TableSizes/TableSizes";
import ShelfDisplay from "../../components/ShelfDisplay/ShelfDisplay";
import ShareKit from "../../components/ShareKit/ShareKit";

import { data } from "../../colecao";

function App() {
  return (
    <Styled.Container>
      {data.map((product) => (
        <>
          <div className="product_container">
            <ImageContainer images={product.images} />
            <ProductTitle
              productName={product.name}
              productCollection={product.colection}
              productDescription={product.description}
              productColors={product.colors}
              productSizes={product.sizes}
              productReference={product.id}
            />
          </div>
          <ShelfDisplay banner={product.banner} product={product.products} />

          <TableSizes />
          <ShareKit banner={product.banner} />
        </>
      ))}
    </Styled.Container>
  );
}

export default App;

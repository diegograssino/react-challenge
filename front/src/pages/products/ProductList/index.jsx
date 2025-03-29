import { Body, Title } from "@features/UI";

const ProductList = () => {
  return (
    <main>
      <div className="product-list__header">
        <Body variant="secondary" as="p">
          Hi Mr. Michael,
        </Body>
        <Title variant="secondary" as="h2">
          Welcome Back!
        </Title>
        <Title variant="tertiary" as="h1">
          Our Products
        </Title>
      </div>
    </main>
  );
};

export default ProductList;

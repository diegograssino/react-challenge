import { ProductCard } from "@features/products";
import { useApiPolling } from "@features/products/hooks";
import { getProducts } from "@features/products/services";
import { Body, Title } from "@features/UI";

const ProductList = () => {
  const products = useApiPolling(getProducts);

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
      {products ? (
        <section className="product-list__grid">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </section>
      ) : (
        <div className="product-list__loading">
          <Body as="p" variant="primary">
            Loading ...
          </Body>
        </div>
      )}
    </main>
  );
};

export default ProductList;

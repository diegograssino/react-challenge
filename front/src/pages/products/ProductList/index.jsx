import { ProductCard } from "@features/products";
import { useApi } from "@features/products/hooks";
import { getProducts } from "@features/products/services";
import { Body, Loader, Title } from "@features/UI";

const ProductList = () => {
  const { data: products, loading } = useApi(getProducts);

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
      {!loading ? (
        <section className="product-list__grid">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </section>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default ProductList;

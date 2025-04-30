import { Carousel, ProductCard } from "@features/products";
import { getProducts } from "@features/products/services";
import { Body, Loader, Title } from "@features/UI";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isError) {
    return (
      <Title variant="primary" as="h1">
        Not Found
      </Title>
    );
  }

  if (isLoading || !products) {
    return <Loader />;
  }

  return (
    <main>
      <div className="product-list__header">
        <Body variant="secondary" as="p">
          Hi Mr. Michael,
        </Body>
        <Title variant="secondary" as="h2">
          Welcome Back!
        </Title>
        <Carousel />
        <Title variant="tertiary" as="h1">
          Our Products
        </Title>
      </div>
      <section className="product-list__grid">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomePage;

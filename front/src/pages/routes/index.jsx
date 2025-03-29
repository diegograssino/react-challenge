import { Header, Title } from "@features/UI";
import { ProductDetail, ProductList } from "@pages/products";
import { Route, Routes } from "react-router";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="products">
        <Route
          index
          element={
            <>
              <Header location="product-list" />
              <ProductList />
            </>
          }
        />
        <Route
          path=":slug"
          element={
            <>
              <Header location="product-detail" />
              <ProductDetail />
            </>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <Title as="h1" variant="primary">
            Not Found!
          </Title>
        }
      />
    </Routes>
  );
};

export default RoutesConfig;

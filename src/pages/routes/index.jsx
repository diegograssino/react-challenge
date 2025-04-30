import { Header, Title } from "@features/UI";
import HomePage from "@pages/home-page";
import { ProductDetail } from "@pages/products";
import { Route, Routes } from "react-router";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <>
            <Header location="" />
            <HomePage />
          </>
        }
      />
      <Route path="products">
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

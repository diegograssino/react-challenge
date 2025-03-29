import { ProductDetail, ProductList } from "@pages/products";
import { Route, Routes } from "react-router";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="products">
        <Route index element={<ProductList />} />
        <Route path=":slug" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
};

export default RoutesConfig;

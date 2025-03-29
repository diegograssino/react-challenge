import { Container } from "@features/UI";
import RoutesConfig from "@pages/routes";
import { BrowserRouter } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <RoutesConfig />
      </Container>
    </BrowserRouter>
  );
}

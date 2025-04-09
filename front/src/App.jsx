import { Container } from "@features/UI";
import MobileFrame from "@features/UI/MobileFrame";
import RoutesConfig from "@pages/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Container>
          <MobileFrame>
            <RoutesConfig />
          </MobileFrame>
        </Container>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

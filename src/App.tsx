import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { BottomTab } from "./components/BottomTab/BottomTab";
import AppRoutes from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
        <BottomTab />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

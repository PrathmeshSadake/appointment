import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Expenses from "./components/Users";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Expenses />
    </QueryClientProvider>
  );
}

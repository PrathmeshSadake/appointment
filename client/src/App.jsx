import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Users from "./components/Users";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}

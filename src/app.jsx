import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Form } from "./components/form";

const queryClient = new QueryClient();

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <Form />
    </QueryClientProvider>
  );
}

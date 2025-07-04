import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Quote from './components/Quote';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Quote />
    </QueryClientProvider>
  );
}

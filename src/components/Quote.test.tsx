import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from './Quote';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRandomQuoteQuery } from './quoteQuery';

jest.mock('./quoteQuery');
const mockedUseRandomQuoteQuery = useRandomQuoteQuery as jest.Mock;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
});

const wrapper = ({ children }: React.PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('Quote component', () => {
  it('should display the loading spinner when data is being loaded', () => {
    mockedUseRandomQuoteQuery.mockImplementation(() => ({
      isLoading: true
    }));
    render(<Quote />, { wrapper });
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should display the quote when api returns ok', () => {
    mockedUseRandomQuoteQuery.mockImplementation(() => ({
      data: { author: 'Aristotle', content: 'Knowing yourself is the beginning of all wisdom.' },
      status: 'loading'
    }));
    render(<Quote />, { wrapper });
    expect(screen.getByText('Aristotle')).toBeInTheDocument();
  });

  it('should display an error message when api returns an error', () => {
    mockedUseRandomQuoteQuery.mockImplementation(() => ({
      data: { author: 'Aristotle', content: 'Knowing yourself is the beginning of all wisdom.' },
      error: '404'
    }));
    render(<Quote />, { wrapper });
    expect(
      screen.getByText('Well this is embarrassing, there was an error getting your random quote.')
    ).toBeInTheDocument();
  });
});

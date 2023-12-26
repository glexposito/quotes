import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from './Quote';
import { useRandomQuoteQuery } from './quoteQuery';

jest.mock('./quoteQuery');
const mockedUseRandomQuoteQuery = useRandomQuoteQuery as jest.Mock;

describe('Quote component', () => {
  it('should display the loading spinner when data is being loaded', () => {
    mockedUseRandomQuoteQuery.mockImplementation(() => ({
      isLoading: true
    }));
    render(<Quote />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should display the quote when api returns ok', () => {
    mockedUseRandomQuoteQuery.mockImplementation(() => ({
      data: { author: 'Aristotle', content: 'Knowing yourself is the beginning of all wisdom.' },
      isError: false
    }));
    render(<Quote />);
    expect(screen.getByText('Aristotle')).toBeInTheDocument();
  });

  it('should display an error message when api returns an error', () => {
    mockedUseRandomQuoteQuery.mockImplementation(() => ({
      isError: true
    }));
    render(<Quote />);
    expect(
      screen.getByText('Well this is embarrassing, there was an error getting your random quote.')
    ).toBeInTheDocument();
  });
});

import { useQuery } from 'react-query';

export const useRandomQuoteQuery = () => {
  const result = useQuery(['RandomQuote'], () => {
    return fetch('https://api.quotable.io/random').then((res) => res.json());
  });
  return result;
};

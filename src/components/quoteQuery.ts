import { useQuery } from 'react-query';

export const useRandomQuoteQuery = () => {
  const result = useQuery(['RandomQuote'], async () => {
    const res = await fetch('https://api.quotable.io/random');
    if (!res.ok) {
      console.log(res.statusText);
      throw new Error(res.statusText);
    }
    return res.json();
  });
  return result;
};

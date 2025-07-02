import { useRandomQuoteQuery } from './quoteQuery';

export default function Quote() {
  const { isLoading, isError, data } = useRandomQuoteQuery();

  const renderLoading = () => (
    <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  const renderError = () => (
    <>
      <p className="lead">
        <i className="bi bi-emoji-frown-fill px-2"></i>
        Well this is embarrassing, there was an error getting your random quote.
      </p>
    </>
  );

  const renderQuote = () => (
    <>
      <h1>{data.author}</h1>
      <p className="lead">{data.quote}</p>
    </>
  );

  const content = isLoading ? renderLoading() : isError ? renderError() : renderQuote();

  return (
    <div className="App">
      <main className="px-3">{content}</main>
    </div>
  );
}

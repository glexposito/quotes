import { useRandomQuoteQuery } from './quoteQuery';

export default function Quote() {
  const { isLoading, error, data } = useRandomQuoteQuery();

  let content;

  if (isLoading) {
    content = (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else if (error) {
    content = (
      <>
        <p className="lead">
          <i className="bi bi-emoji-frown-fill px-2"></i>
          Well this is embarrassing, there was an error getting your random quote.
        </p>
      </>
    );
  } else {
    content = (
      <>
        <h1>{data.author}</h1>
        <p className="lead">{data.content}</p>
      </>
    );
  }

  return (
    <div className="App">
      <main className="px-3">{content}</main>
    </div>
  );
}

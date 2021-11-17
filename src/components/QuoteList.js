import React from "react";
import Quote from "./Quote";

export default function QuoteList({
  quotes,
  handleOnClickSelectedQuote,
  handleOnClickClear,
}) {
  return (
    <div className="quote-list">
    <h1>Quotes</h1>
      {quotes.map((quote) => {
        return (
          <Quote
            key={quote.id}
            {...quote}
            handleOnClickSelectedQuote={handleOnClickSelectedQuote}
          />
        );
      })}
    </div>
  );
}

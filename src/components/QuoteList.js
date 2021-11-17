import React from "react";
import Quote from "./Quote";

export default function QuoteList({
  quotes,
  handleOnClickSelectedQuote,
  handleOnClickClear,
}) {
  return (
    <div className="quote-list">
      {quotes.map((quote) => {
        return (
          <Quote
            key={quote.id}
            {...quote}
            handleOnClickSelectedQuote={handleOnClickSelectedQuote}
          />
        );
      })}
      <button onClick={handleOnClickClear}>Clear</button>
    </div>
  );
}

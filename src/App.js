import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import QuoteList from './components/QuoteList';
import Quote from './components/Quote';

function App() {
  const QUOTE_NUMBER = 5
  const BOOK_NUMBER = 5
  const [quotes, setQuotes] = useState([]);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [books, setBooks] = useState([])

  function handleOnClickSelectedQuote(selectedQuoteId) {
    console.log(selectedQuoteId)
    setSelectedQuote(quotes.find(quote => quote.id === selectedQuoteId));
  }

  function handleOnClickClear() {
    setSelectedQuote(null);
  }

  useEffect(async () => {
    const response = await fetch(`https://the-dune-api.herokuapp.com/quotes/${QUOTE_NUMBER}`)
    const quotes = await response.json();
    const responseBooks = await fetch(`https://the-dune-api.herokuapp.com/books/${BOOK_NUMBER}`)
    const books = await response.json();
    setQuotes(quotes)
    setBooks(books);
  }, [])

  return (
    <div className="App">
      <QuoteList quotes={quotes} 
                 handleOnClickSelectedQuote={handleOnClickSelectedQuote} 
                 handleOnClickClear={handleOnClickClear}/>

      <div className="quote-details">
        <Quote {...selectedQuote}/>
      </div>
    </div>
  );
}

export default App;

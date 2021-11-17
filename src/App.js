import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useMemo } from 'react';
import QuoteList from './components/QuoteList';
import Quote from './components/Quote';
import BookList from './components/BookList';
import Book from './components/Book';

function App() {
  const QUOTE_NUMBER = 5
  const BOOK_NUMBER = 5
  const [quotes, setQuotes] = useState([]);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null);

  function handleOnClickSelectedQuote(selectedQuoteId) {
    console.log(selectedQuoteId)
    setSelectedBook(null);
    setSelectedQuote(quotes.find(quote => quote.id === selectedQuoteId));
  }

  function handleOnClickSelectedBook(selectedBookId) {
    console.log(selectedBookId)
    setSelectedQuote(null);
    setSelectedBook(books.find(book => book.id === selectedBookId));
  }

  function handleOnClickClear() {
    setSelectedQuote(null);
    setSelectedBook(null);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://the-dune-api.herokuapp.com/quotes/${QUOTE_NUMBER}`)
      const quotes = await response.json();
      const responseBooks = await fetch(`https://the-dune-api.herokuapp.com/books/${BOOK_NUMBER}`)
      const books = await responseBooks.json();
      setQuotes(quotes)
      setBooks(books); 
    }
    fetchData();
  }, [])

  const selectedItem = useMemo(() => {
    if (selectedQuote) return <Quote {...selectedQuote}/>;
    if (selectedBook) return <Book {...selectedBook}/>;
    return null
  }, [selectedQuote, selectedBook])

  return (
    <div className="App">
      <QuoteList quotes={quotes} handleOnClickSelectedQuote={handleOnClickSelectedQuote}/>
      <BookList books={books} handleOnClickSelectedBook={handleOnClickSelectedBook}/>

      <div className="item-details">
        {selectedItem}
      </div>
      <button className="button" onClick={handleOnClickClear}>Clear</button>
    </div>
  );
}

export default App;

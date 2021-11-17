import { render, screen, fireEvent, act } from "@testing-library/react";
import App from "./App";
import QuoteList from "./components/QuoteList";
import BookList from "./components/BookList";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("renders quote list", () => {
  const container = render(<App />);
  expect(container.container.querySelector(".quote-list")).toBeInTheDocument();
});

test("renders a quote", () => {
  const mockQuotes = [
    {
      id: 1,
      quote: "test",
    },
    {
      id: 2,
      quote: "test 2",
    },
  ];
  const container = render(<QuoteList quotes={mockQuotes}/>);
  expect(container.container.querySelector(".quote")).toBeInTheDocument();
});

test("renders book list", () => {
  const container = render(<App />);
  expect(container.container.querySelector(".book-list")).toBeInTheDocument();
});

test("renders a book", () => {
  const mockBooks = [
    {
      id: "20",
      title: "Dune: The Duke of Caladan",
      year: "2020",
      author: ["Brian Herbert", "Kevin J. Anderson"],
      wiki_url: "https:/en.wikipedia.org/wiki/Dune:_The_Duke_of_Caladan",
    },
    {
      id: "15",
      title: "Paul of Dune",
      year: "2008",
      author: ["Brian Herbert", "Kevin J. Anderson"],
      wiki_url: "https:/en.wikipedia.org/wiki/Paul_of_Dune",
    },
    {
      id: "4",
      title: "God Emperor of Dune",
      year: "1981",
      author: "Frank Herbert",
      wiki_url: "https:/en.wikipedia.org/wiki/God_Emperor_of_Dune",
    },
  ];
  const container = render(<BookList books={mockBooks} />);
  expect(container.container.querySelector(".book")).toBeInTheDocument();
});

test("selected quote when quote is clicked", () => {
  const mockHandleOnClickSelectedQuote = jest.fn();
  const mockQuotes = [
    {
      id: 1,
      quote: "test",
    },
    {
      id: 2,
      quote: "test 2",
    },
  ];
  const container = render(
    <QuoteList quotes={mockQuotes} handleOnClickSelectedQuote={mockHandleOnClickSelectedQuote} />
  );
  fireEvent.click(container.container.querySelector('.quote'))
  expect(mockHandleOnClickSelectedQuote).toHaveBeenCalled();
});

test("selected book when book is clicked", () => {
  const mockHandleOnClickSelectedBook = jest.fn();
  const mockBooks = [
    {
      id: "20",
      title: "Dune: The Duke of Caladan",
      year: "2020",
      author: ["Brian Herbert", "Kevin J. Anderson"],
      wiki_url: "https:/en.wikipedia.org/wiki/Dune:_The_Duke_of_Caladan",
    },
    {
      id: "15",
      title: "Paul of Dune",
      year: "2008",
      author: ["Brian Herbert", "Kevin J. Anderson"],
      wiki_url: "https:/en.wikipedia.org/wiki/Paul_of_Dune",
    },
    {
      id: "4",
      title: "God Emperor of Dune",
      year: "1981",
      author: "Frank Herbert",
      wiki_url: "https:/en.wikipedia.org/wiki/God_Emperor_of_Dune",
    },
  ];
  const container = render(
    <BookList books={mockBooks} handleOnClickSelectedBook={mockHandleOnClickSelectedBook} />
  );
  fireEvent.click(container.container.querySelector('.book'))
  expect(mockHandleOnClickSelectedBook).toHaveBeenCalled();
});

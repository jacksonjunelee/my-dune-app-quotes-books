import { render, screen, fireEvent, act } from "@testing-library/react";
import App from "./App";
import QuoteList from "./components/QuoteList";

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
  const container = render(<App />);
  expect(container.container.querySelector(".quote")).toBeInTheDocument();
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

test('clear selected quote', () => {
  const mockHandleOnClickClear= jest.fn();
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
  render(
    <QuoteList quotes={mockQuotes} handleOnClickClear={mockHandleOnClickClear} />
  );
  fireEvent.click(screen.getByText('Clear'));
  expect(mockHandleOnClickClear).toHaveBeenCalled();

})

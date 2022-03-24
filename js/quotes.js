const quotes = [
  { quote: "quote 1", author: "author 1" },
  { quote: "quote 2", author: "author 2" },
  { quote: "quote 3", author: "author 3" },
  { quote: "quote 4", author: "author 4" },
  { quote: "quote 5", author: "author 5" },
  { quote: "quote 6", author: "author 6" },
  { quote: "quote 7", author: "author 7" },
  { quote: "quote 8", author: "author 8" },
  { quote: "quote 9", author: "author 9" },
  { quote: "quote 10", author: "author 10" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
function getQuote() {
  const ranNum = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[ranNum];
  quote.innerText = selectedQuote.quote;
  author.innerText = selectedQuote.author;
}
getQuote();

const heroQuote = document.getElementById('random-quote');
const randomizeButton = document.getElementById('randomize-quote');
const quotes = [...document.querySelectorAll('.quotes-grid blockquote p')]
  .map(quote => quote.textContent.trim());

function showRandomQuote() {
  const choices = quotes.filter(quote => quote !== heroQuote.textContent.trim());
  if (choices.length === 0) return;

  heroQuote.textContent = choices[Math.floor(Math.random() * choices.length)];
}

randomizeButton.addEventListener('click', showRandomQuote);
showRandomQuote();

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

// Quote cards open the machine page with a one-time arrival effect.
document.querySelectorAll('.quotes-grid .quote').forEach(card => {
  card.setAttribute('role', 'link');
  card.tabIndex = 0;

  const openMachine = () => {
    window.location.href = 'machine.html?from=quotes';
  };

  card.addEventListener('click', openMachine);
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openMachine();
    }
  });
});

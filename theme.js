(() => {
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let preference;
  try {
    preference = localStorage.getItem('theme');
  } catch {
    // The toggle still works when browser storage is unavailable.
  }

  window.updateThemeToggle = () => {
    const button = document.querySelector('.theme-toggle');
    if (button) {
      button.setAttribute('aria-pressed', String(document.documentElement.dataset.theme === 'dark'));
    }
  };

  function applyTheme() {
    const theme = preference === 'dark' || preference === 'light'
      ? preference
      : systemTheme.matches ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    window.updateThemeToggle();
  }

  applyTheme();
  systemTheme.addEventListener('change', applyTheme);
  document.addEventListener('click', event => {
    if (!event.target.closest('.theme-toggle')) return;
    preference = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    try {
      localStorage.setItem('theme', preference);
    } catch {
      // Keep the selected theme for this page even without storage.
    }
  });
})();

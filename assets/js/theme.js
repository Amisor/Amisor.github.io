// Light/dark toggle. Defaults to the OS setting; a click saves an explicit choice.
(function () {
  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function current() {
    return root.dataset.theme || (media.matches ? 'dark' : 'light');
  }

  function render() {
    var mode = current();
    button.dataset.mode = mode;
    button.setAttribute('aria-label', mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  button.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    render();
  });

  media.addEventListener('change', render);
  render();
})();

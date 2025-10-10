const body = document.body;
const modeToggle = document.getElementById('mode-toggle');
const currentMode = localStorage.getItem('mode');

if (currentMode) {
  body.classList.add(currentMode);
}

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  let mode = 'light-mode';
  if (body.classList.contains('dark-mode')) {
    mode = 'dark-mode';
  }
  localStorage.setItem('mode', mode);
});
<!-- genere esto con la ia de google lmaooo -->

// Barra de navegação: ganha fundo depois que a página rola.
(function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;

  function update() {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  }

  update();
  window.addEventListener('scroll', update, { passive: true });
})();

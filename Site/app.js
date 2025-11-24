// Dropdow das traduções 
const langBtn = document.querySelector('.lang-btn');
const dropdown = document.querySelector('.lang-dropdown');
const arrow = document.getElementById('lang-arrow');

langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('show');
    arrow.classList.toggle('rotate');
});

document.addEventListener('click', (e) => {
    if (!document.querySelector('.language-selector').contains(e.target)) {
        dropdown.classList.remove('show');
        arrow.classList.remove('rotate');
    }
});

/* --- Dropdown do menu de navegação (menu radial) --- */
const navBtn = document.querySelector('.navegacao-btn');
const menuNav = document.querySelector('.top-menu-icons');




/* proteção: se elementos não existirem, não da erro */
if (navBtn && menuNav) {
  navBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const willOpen = !menuNav.classList.contains('show');

    // alterna a classe no container do menu
    menuNav.classList.toggle('show');

    // anima o botão principal visualmente
    navBtn.classList.toggle('open', willOpen);
  });

  // fecha ao clicar fora (mantendo pequena latência para evitar 'piscar')
  document.addEventListener('click', (e) => {
    if (!menuNav.contains(e.target) && !navBtn.contains(e.target)) {
      // remove classes imediatamente para responsividade, mas com pequena defasagem visual
      menuNav.classList.remove('show');
      navBtn.classList.remove('open');
    }
  });

  // fecha ao pressionar ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuNav.classList.contains('show')) {
      menuNav.classList.remove('show');
      navBtn.classList.remove('open');
      navBtn.focus();
    }
  });

 

  // melhora a navegação por teclado: ao focar itens, garante que o menu esteja aberto
  const menuItems = Array.from(menuNav.querySelectorAll('a.menu-item'));
  menuItems.forEach(item => {
    item.addEventListener('focus', () => {
      if (!menuNav.classList.contains('show')) {
        menuNav.classList.add('show');
        navBtn.classList.add('open');
      }
    });
  });
}



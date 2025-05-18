const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('cerrar');
const nav = document.getElementById('nav');
const body = document.body;

function openMenu() {
  nav.classList.add('visible');
  body.classList.add('navScrollBlock');
}

function closeMenuFunction() {
  nav.classList.remove('visible');
  body.classList.remove('navScrollBlock');
}

function closeOnClickOutside(event) {
  // Verifica si click fue fuera del menú y no en el botón abrir
  if (
    nav.classList.contains('visible') &&
    !nav.contains(event.target) &&
    event.target !== abrir
  ) {
    closeMenuFunction();
  }
}

abrir.addEventListener('click', (event) => {
  event.stopPropagation(); // Evita que el click en el botón propague el evento
  openMenu();
});

cerrar.addEventListener('click', (event) => {
  event.stopPropagation(); // Evita cerrar el menú por error
  closeMenuFunction();
});

document.addEventListener('click', closeOnClickOutside);

// Modal de imagen
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imgModal");
const cerrar = document.getElementById("cerrar");

document.querySelectorAll(".galeria img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Menú hamburguesa
const iconoMenu = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

iconoMenu.addEventListener("click", () => {
  menu.classList.toggle("activo");
});

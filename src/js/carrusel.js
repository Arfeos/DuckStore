//carga del documento
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar la imagen principal al cargar la página
  changeImage(currentIndex);
});

// traducción de la página
const url = ["https://translate.google.com/gen204?nca=te_li&client=te_lib&logld=vTE_20260831"];

// Imagenes para el carrusel 
const imagenes = [
  "src/img/pato-galactico-Image-1.png",
  "src/img/pato-galactico-Image-2.png",
  "src/img/pato-galactico-Image-3.png"
];
let currentIndex = 0;
const mainImage = document.querySelector(".columna-imagen-carrusel img");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

// Función para cambiar la imagen principal
function changeImage(index) {
  currentIndex = index;
  //Si el índice es menor que 0, se establece en la última imagen
  if (currentIndex < 0) { currentIndex = imagenes.length - 1; }
  // Si es mayor o igual al número de imágenes, se establece en la primera imagen
  if (currentIndex >= imagenes.length) { currentIndex = 0; }
// Actualizar la imagen principal
  if (mainImage) {
    mainImage.src = imagenes[currentIndex];
  }
}

// Evento para los botones del carrusel
if (prevButton && nextButton) {
  prevButton.addEventListener("click", () => changeImage(currentIndex - 1));
  nextButton.addEventListener("click", () => changeImage(currentIndex + 1));
}

// logica para el selector de cantidad
const decreaseButton = document.querySelector(".cantidad-btn:first-of-type");
const increaseButton = document.querySelector(".cantidad-btn:last-of-type");
const quantityInput = document.getElementById("cantidad");

if (decreaseButton && increaseButton && quantityInput) {
  decreaseButton.addEventListener("click", () => {
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
      quantity--;
      quantityInput.value = quantity;
    }
  });

  increaseButton.addEventListener("click", () => {
    let quantity = parseInt(quantityInput.value);
    quantity++;
    quantityInput.value = quantity;
  });
}

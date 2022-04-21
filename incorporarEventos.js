const anillos = [
  { price: 4300, id: 1, name: "Anillo 1", img: "../images/anillos.jpg" },
  { price: 3100, id: 2, name: "Anillo 2", img: "../images/anillo1.jpg" },
  { price: 3200, id: 3, name: "Anillo 3", img: "../images/anillo6.jfif" },
  { price: 6100, id: 4, name: "Anillo 4", img: "../images/anillo4.jfif" },
  { price: 4500, id: 5, name: "Anillo 5", img: "../images/anillo3.jfif" },
  { price: 2900, id: 6, name: "Anillo 6", img: "../images/anillo5.jfif" },
];

const contenedorJoyas = document.querySelector(".contenedor-joyas");
const agregadoCarrito = document.querySelector(".carrito");
const anillosSeleccionados = [];

//Evento
document.addEventListener("DOMContentLoaded", () => {
  mostrarJoyas();
});

//Funciones

function mostrarJoyas( ) {
  anillos.forEach((anillo) => {
    const divJoya = document.createElement("div");
    divJoya.classList.add("card");

    const imgJoya = document.createElement("img");
    imgJoya.src = anillo.img;
    imgJoya.classList.add("imagen-joya");

    const precioJoya = document.createElement("p");
    precioJoya.textContent = anillo.price;

    const btnCarrito = document.createElement("button");
    btnCarrito.className = "btn-carrito";
    btnCarrito.textContent = "Agregar a Carrito";
    btnCarrito.onclick = () => {
      agregarACarrito(anillo.id)
    };

    divJoya.appendChild(imgJoya);
    divJoya.appendChild(precioJoya);
    divJoya.appendChild(btnCarrito);

    contenedorJoyas.appendChild(divJoya);
  });
}

function agregarACarrito(id) {
  const joyaSeleccionada = anillos.find(anillo => anillo.id === id);
  anillosSeleccionados.push(joyaSeleccionada);
  // alert("Se agregó al carrito tu producto")
  mostrarAnillosSeleccionados(anillosSeleccionados);
}

function mostrarAnillosSeleccionados(carrito) {
  agregadoCarrito.innerHTML = "";
    carrito.forEach((anillo) => {
      const divJoya = document.createElement("div");
      divJoya.classList.add("card");

      const imgJoya = document.createElement("img");
      imgJoya.src = anillo.img;
      imgJoya.classList.add("imagen-joya");

      const precioJoya = document.createElement("p");
      precioJoya.textContent = anillo.price;
    
      

      divJoya.appendChild(imgJoya);
      divJoya.appendChild(precioJoya);
      

      agregadoCarrito.appendChild(divJoya);
    });
  
 
}
let anioNacimiento = prompt("Ingresa tu año de nacimiento");
if (anioNacimiento < 2004) {
  alert("Eres mayor de edad, disfruta tus compras! 🤑");
} else if (anioNacimiento > 2004) {
  alert("Lo sentimos hasta que seas mayor de edad puedes entrar 😔");
}

const agregar = (a, b) => a + b;
const quitar = (a, b) => a - b;
let precioSinIva = 2500;
let descuento = .80; //descuento del 20%
let sinIvaConDescuento = precioSinIva * descuento
let iva = sinIvaConDescuento * 0.16; //iva del 16% en Mexico
let precioFinal = agregar(sinIvaConDescuento, iva);

console.log("Precio sin descuento: " + precioSinIva);
console.log('Precio con el 20% de descuento: ' + sinIvaConDescuento);
console.log('Iva del 16%: ' + iva);
console.log(
  "El precio final después del 20% de descuento y con el 16% de iva es de: " +
    precioFinal
);




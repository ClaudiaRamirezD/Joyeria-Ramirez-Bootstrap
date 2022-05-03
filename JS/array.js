let anioNacimiento = prompt("Ingresa tu año de nacimiento");
if (anioNacimiento < 2004) {
  alert("Eres mayor de edad, disfruta tus compras! 🤑");
} else if (anioNacimiento > 2004) {
  alert("Lo sentimos hasta que seas mayor de edad puedes entrar 😔");
}

let stock = ["anillos", "aretes", "collares", "pulseras", "otros"];

let joya = prompt(
  "Bienvenid@ a Joyeria Artesanal Koathli, qué desea comprar? \n 1. Anillos \n 2. Aretes \n 3. Collares \n 4. Pulsera \n 5. Otros"
);
joya = joya.toLowerCase();
while (!stock.includes(joya)) {
  alert(
    "No contamos con el producto que buscas, porfavor ingresa un artículo válido"
  );
  joya = prompt("Por favor ingresa un artículo de nuestra lista");
  joya = joya.toLowerCase();
}

const agregar = (a, b) => a + b;
const quitar = (a, b) => a - b;
let precioSinIva = prompt(
  "Qué precio tiene l@s " + joya + " qué quieres comprar?"
);
let descuento = 0.8; //descuento del 20%
let sinIvaConDescuento = precioSinIva * descuento;
let iva = sinIvaConDescuento * 0.16; //iva del 16% en Mexico
let precioFinal = agregar(sinIvaConDescuento, iva);

alert("Precio sin descuento: " + precioSinIva);
alert("Precio con el 20% de descuento: " + sinIvaConDescuento);
alert("Iva del 16%: " + iva);
alert(
  "El precio final después del 20% de descuento y con el 16% de iva es de: " +
    precioFinal
);

alert("Gracias por comprar con nosotos, te esperamos pronto!😊");

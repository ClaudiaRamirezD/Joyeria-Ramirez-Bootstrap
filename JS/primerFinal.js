//ANTES DE OPERADOR AVANZADO

/* let anioNacimiento = prompt("Ingresa tu año de nacimiento");
if (anioNacimiento < 2004) {
  alert("Eres mayor de edad, disfruta tus compras! 🤑");
} else if (anioNacimiento > 2004) {
  alert("Lo sentimos hasta que seas mayor de edad puedes entrar 😔");
}
 */

//USANDO OPERADOR TERNARIO

let anioNacimiento = prompt("Ingresa tu año de nacimiento");
const acceso =
  anioNacimiento > 2004
    ? alert("Lo sentimos hasta que seas mayor de edad puedes entrar 😔")
    : alert("Eres mayor de edad, disfruta tus compras! 🤑"); 

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


//Incorporando funciones de orden superior

const opcionesJoyas = [
  { tipo: "anillo", material: "oro", precio: 3700 },
  { tipo: "anillo", material: "plata", precio: 3200 },
  { tipo: "anillo", material: "zafiro", precio: 4500 },
  { tipo: "anillo", material: "rubi", precio: 7200 },
  { tipo: "anillo", material: "bronce", precio: 2500 },
  { tipo: "arete", material: "plata", precio: 1200 },
  { tipo: "arete", material: "oro", precio: 3200 },
  { tipo: "arete", material: "zafiro", precio: 5100 },
  { tipo: "arete", material: "rubi", precio: 8200 },
  { tipo: "arete", material: "bronce", precio: 2200 },
  { tipo: "collar", material: "oro", precio: 6600 },
  { tipo: "collar", material: "plata", precio: 5600 },
  { tipo: "collar", material: "zafiro", precio: 7500 },
  { tipo: "collar", material: "rubi", precio: 10300 },
  { tipo: "collar", material: "bronce", precio: 6500 },
  {tipo: "pulsera", material: "oro", precio: 5700 },
  { tipo: "pulsera", material: "plata", precio: 4600 },
  { tipo: "pulsera", material: "zafiro", precio: 6800 },
  { tipo: "pulsera", material: "rubi", precio: 9300 },
  { tipo: "pulsera", material: "bronce", precio: 4500 },
]

//DESTRUCTURACION DE ARRAY
const materiales = ["oro", "plata", "zafiro", "rubi", "bronce"];
const [a, b, c, d, e] = materiales;

console.log(d);
console.log(a);
console.log(b);

//SPREAD DEL ARRAY

console.log(...materiales);

const materialesObj = {
  ...materiales
}

console.log(materialesObj);

//mostrar todas las joyas que sean de Zafiro

const joyasZafiro = opcionesJoyas.filter(material => joya.material === "zafiro");
console.log(joyasZafiro);

//motrar joyas de entre el precio de 3000 y 7000

const joyasPrecioMedio = opcionesJoyas.filter((precio) => (joya.precio >= 3000 && joya.precio < 7000));
console.log(joyasPrecioMedio);

// let params = document.getElementById("correo");
// let params = new URLSearchParams({
//     email: "clau8812@hotmail.com"
// })



// fetch(`https://api.eva.pingutil.com/email?email=${params}`)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("error", error));

const correo =document.getElementById("correo");
const validar = document.getElementById("validacion");
const boton = document.getElementById("boton");

boton.addEventListener("click", (e) => {
    e.preventDefault();
    traerValidacion(correo);
})

// const urlBase = "https://api.eva.pingutil.com/email?email=";
// const urlApi = `${urlBase}${correo}`;
// console.log(urlApi);


function traerValidacion(correo) {
    fetch(`https://api.eva.pingutil.com/email?email=${correo}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
}


// function crearValidacion(correo) {
//     const webmail = document.createElement("h3"); 
//     webmail.textContent = data.webmail;

//     const deliverabale = document.createElement("h3");
//     deliverabale.textContent = data.data.deliverabale;

//     const div = document.createElement("div");
//     div.appendChild(webmail);
//     div.appendChild(deliverabale);

//     validar.appendChild(div);
// }
// traerValidacion();
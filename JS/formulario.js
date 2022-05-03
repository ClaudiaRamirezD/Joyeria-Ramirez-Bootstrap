let main = function () {
    capturaBoton();
}

let capturaBoton = function () {
    document.querySelector(".boton-formulario ").setAttribute("onclick", "dataRead()");
}

let dataRead = function () {
    console.log("Intentando leer datos del formulario");
    console.log(
      document.querySelector("#nombre").value,
      document.querySelector("#password").value,
      document.querySelector("#email").value,
      document.querySelector("#edad").value
    );
    let myObject = {
        nombre: document.querySelector("#nombre").value,
        password: document.querySelector("#password").value,
        email: document.querySelector("#email").value,
        edad: document.querySelector("#edad").value
    };
    console.log(myObject);
    //Pasando objeto a string para usar json
    console.log(JSON.stringify(myObject)); //Solo sirve para ver que hace el stringify
    //Guardando en localStorge(PERSISTENCIA DE DATOS)
    save_localStorage(myObject);
}

let save_localStorage = function (myObject2) {
    localStorage.setItem('infoCliente', JSON.stringify(myObject2));
}

let read_localStorage = function () {
    let myInfo = localStorage.getItem("myInfo");
    console.log(myInfo);
    let myObject = JSON.parse(myInfo);
    console.log(myObject);
    document.querySelector("#nombre").value = myObject.nombre;
    document.querySelector("#password").value= myObject.password;
    document.querySelector("#email").value= myObject.email;
    document.querySelector("#edad").value= myObject.edad;
}
main();
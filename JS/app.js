
// let params = document.getElementById("correo");
let params = new URLSearchParams({
    email: "clau8812@hotmail.com"
})



fetch(`https://api.eva.pingutil.com/email?email=${params}`)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("error", error));

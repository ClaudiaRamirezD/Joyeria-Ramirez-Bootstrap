const carrito2 = document.querySelector("#carrito2");
const template = document.querySelector("#template");
const footer = document.querySelector('#footer')
const templateFooter = document.querySelector("#templateFooter");
const fragment = document.createDocumentFragment();

document.addEventListener('click', (e) => {
    // console.log(e.target.matches(".card .btn-outline-primary"));
    if (e.target.matches(".card .btn-outline-primary")) {
        console.log("Ejecutar agregar al carro");
        agregarAlCarrito(e)
    }

    // console.log(e.target.matches(".list-group-item .btn-success"))
    if (e.target.matches(".list-group-item .btn-success")) {
         btnAumentar(e)
    }
    if (e.target.matches(".list-group-item .btn-danger")) {
      btnDisminuir(e);
    }
});

let carritoObjeto = [];

const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.joya)

    const producto = {
        titulo: e.target.dataset.joya,
        id: e.target.dataset.joya,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio),
    };


    // console.log(producto)
    const index = carritoObjeto.findIndex(
        (item) => item.id === producto.id);
    // console.log(index)
    if (index === -1) {
        carritoObjeto.push(producto)
    } else {
        carritoObjeto[index].cantidad++
        // carritoObjeto[index].precio = carritoObjeto[index].cantidad * producto.precio
    }

    console.log(carritoObjeto)

    pintarCarrito();

};

const pintarCarrito = () => {
    carrito2.textContent = ""

    carritoObjeto.forEach(item => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".bg-info .lead").textContent = item.titulo;
        clone.querySelector(".badge").textContent = item.cantidad;
        clone.querySelector("div .lead span").textContent = item.precio * item.cantidad;
        clone.querySelector(".btn-danger").dataset.id = item.id
        clone.querySelector(".btn-success").dataset.id = item.id;


        fragment.appendChild(clone);
    })
    carrito2.appendChild(fragment);
}

const btnAumentar = (e) => {
    console.log("me diste click", e.target.dataset.id);
    carritoObjeto = carritoObjeto.map(item => {
        if (item.id === e.target.dataset.id) {
            item.cantidad++
        }
        return item
    })

    pintarCarrito();
};

const btnDisminuir = (e) => {
    console.log("me diste clicn", e.target.dataset.id)

    carritoObjeto = carritoObjeto.filter(item => {
        if (item.id === e.target.dataset.id) {
            if (item.cantidad > 0) {
                item.cantidad--
                if (item.cantidad === 0) return
                return item
          }
        } else { return item}
    })
    pintarCarrito();
}
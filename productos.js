// productos.js

const productos = [
    // Sección Manga Naruto
    {
        id: "1",
        titulo: "Tomo 1",
        imagen: "static/img/naruto.png",
        categoria: { nombre: "Mangas", id: "mangas" },
        precio: 25000
    },
    {
        id: "2",
        titulo: "Tomo 2",
        imagen: "static/img/naruto2.png",
        categoria: { nombre: "Mangas", id: "mangas" },
        precio: 25000
    },
    {
        id: "3",
        titulo: "Tomo 3",
        imagen: "static/img/naruto3.webp",
        categoria: { nombre: "Mangas", id: "mangas" },
        precio: 25000
    },

    // Sección Manga Kimetsu
    {
        id: "4",
        titulo: "Tomo 1",
        imagen: "static/img/kimetsu.webp",
        categoria: { nombre: "Mangas", id: "mangas" },
        precio: 25000
    },
    {
        id: "5",
        titulo: "Tomo 2",
        imagen: "static/img/kimetsu2.webp",
        categoria: { nombre: "Mangas", id: "mangas" },
        precio: 25000
    },
    {
        id: "6",
        titulo: "Tomo 3",
        imagen: "static/img/pk.png",
        categoria: { nombre: "Mangas", id: "mangas" },
        precio: 25000
    },

    // Sección Manga Jujutsu
    {
        id: "7",
        titulo: "Tomo 1",
        imagen: "static/img/jujutsu.webp",
        categoria: { nombre: "Mangas", id: "mangas" },
        precio: 26000
    },
    {
        id: "8",
        titulo: "Tomo 2",
        imagen: "static/img/jujutsu2.webp",
        categoria: { nombre: "Mangas", id: "mangas" },
        precio: 26000
    },
    {
        id: "9",
        titulo: "Tomo 3",
        imagen: "static/img/jujutsu4.png",
        categoria: { nombre: "Mangas", id: "mangas" },
        precio: 26000
    },

    // Figuras Naruto
    {
        id: "10",
        titulo: "Figura Naruto ",
        imagen: "static/img/narutosabio.png",
        categoria: { nombre: "Figuras", id: "figuras" },
        precio: 85000
    },
    {
        id: "11",
        titulo: "Figura kakashi",
        imagen: "static/img/kakashi.png",
        categoria: { nombre: "Figuras", id: "figuras" },
        precio: 90000
    },
    {
        id: "12",
        titulo: "Figura itachi",
        imagen: "static/img/itachi.png",
        categoria: { nombre: "Figuras", id: "figuras" },
        precio: 87000
    },
    {
        id: "13",
        titulo: "Figura Sasuke",
        imagen: "static/img/sasuke.png",
        categoria: { nombre: "Figuras", id: "figuras" },
        precio: 95000
    },

    // Figuras Kimetsu
    {
        id: "14",
        titulo: "Figura nezuko",
        imagen: "static/img/nezuko.png",
        categoria: { nombre: "Figuras", id: "figuras" },
        precio: 90000
    },
    {
        id: "15",
        titulo: "Figura tanjiro",
        imagen: "static/img/tanjiro.png",
        categoria: { nombre: "Figuras", id: "figuras" },
        precio: 92000
    },
    {
        id: "16",
        titulo: "Figura zenitsu",
        imagen: "static/img/zenitsu.png",
        categoria: { nombre: "Figuras", id: "figuras" },
        precio: 88000
    },
    {
        id: "17",
        titulo: "Figura tokito",
        imagen: "static/img/tokito.png",
        categoria: { nombre: "Figuras", id: "figuras" },
        precio: 97000
    },

    // Figuras Jujutsu
    {
        id: "18",
        titulo: "Figura gojo",
        imagen: "static/img/gojo.png",
        categoria: { nombre: "Figuras", id: "figuras" },
        precio: 89000
    },
    {
        id: "19",
        titulo: "Figura itadori",
        imagen: "static/img/itadori.png",
        categoria: { nombre: "Figuras", id: "figuras" },
        precio: 91000
    },
    {
        id: "20",
        titulo: "Figura megumi",
        imagen: "static/img/megumi.png",
        categoria: { nombre: "Figuras", id: "figuras" },
        precio: 93000
    },
    {
        id: "21",
        titulo: "Figura geto",
        imagen: "static/img/geto.png",
        categoria: { nombre: "Figuras", id: "figuras" },
        precio: 95000
    },

    // Posters Naruto
    {
        id: "22",
        titulo: "Poster Naruto",
        imagen: "static/img/pn.png",
        categoria: { nombre: "Posters", id: "posters" },
        precio: 15000
    },
    {
        id: "23",
        titulo: "Poster Naruto ",
        imagen: "static/img/pn2.png",
        categoria: { nombre: "Posters", id: "posters" },
        precio: 15000
    },
    {
        id: "24",
        titulo: "Poster Naruto ",
        imagen: "static/img/pn3.png",
        categoria: { nombre: "Posters", id: "posters" },
        precio: 15000
    },
    {
        id: "25",
        titulo: "Poster Naruto ",
        imagen: "static/img/pn4.png",
        categoria: { nombre: "Posters", id: "posters" },
        precio: 15000
    },

    // Posters Kimetsu
    {
        id: "26",
        titulo: "Poster Kimetsu ",
        imagen: "static/img/pk1.png",
        categoria: { nombre: "Posters", id: "posters" },
        precio: 15000
    },
    {
        id: "27",
        titulo: "Poster Kimetsu ",
        imagen: "static/img/pk2.png",
        categoria: { nombre: "Posters", id: "posters" },
        precio: 15000
    },
    {
        id: "28",
        titulo: "Poster Kimetsu ",
        imagen: "static/img/pk3.png",
        categoria: { nombre: "Posters", id: "posters" },
        precio: 15000
    },
    {
        id: "29",
        titulo: "Poster Kimetsu ",
        imagen: "static/img/pk4.png",
        categoria: { nombre: "Posters", id: "posters" },
        precio: 15000
    },

    // Posters Jujutsu
    {
        id: "30",
        titulo: "Poster Jujutsu ",
        imagen: "static/img/pj.png",
        categoria: { nombre: "Posters", id: "posters" },
        precio: 15000
    },
    {
        id: "31",
        titulo: "Poster Jujutsu ",
        imagen: "static/img/pj2.png",
        categoria: { nombre: "Posters", id: "posters" },
        precio: 15000
    },
    {
        id: "32",
        titulo: "Poster Jujutsu ",
        imagen: "static/img/pj3.png",
        categoria: { nombre: "Posters", id: "posters" },
        precio: 15000
    },
    {
        id: "33",
        titulo: "Poster Jujutsu ",
        imagen: "static/img/po.png",
        categoria: { nombre: "Posters", id: "posters" },
        precio: 15000
    },

    // Accesorios Naruto
    {
        id: "34",
        titulo: "Billetera de naruto",
        imagen: "static/img/an.png",
        categoria: { nombre: "Accesorios", id: "accesorios" },
        precio: 12000
    },
    {
        id: "35",
        titulo: "llavero de naruto",
        imagen: "static/img/an2.png",
        categoria: { nombre: "Accesorios", id: "accesorios" },
        precio: 12000
    },
    {
        id: "36",
        titulo: "kunais",
        imagen: "static/img/an3.png",
        categoria: { nombre: "Accesorios", id: "accesorios" },
        precio: 12000
    },
    {
        id: "37",
        titulo: "Anillo y collar de akatsuki",
        imagen: "static/img/an4.png",
        categoria: { nombre: "Accesorios", id: "accesorios" },
        precio: 12000
    },

    // Accesorios Kimetsu
    {
        id: "38",
        titulo: "taza de cafe",
        imagen: "static/img/ak.png",
        categoria: { nombre: "Accesorios", id: "accesorios" },
        precio: 12000
    },
    {
        id: "39",
        titulo: "aretes",
        imagen: "static/img/ak2.png",
        categoria: { nombre: "Accesorios", id: "accesorios" },
        precio: 12000
    },
    {
        id: "40",
        titulo: "mariposa de shinobu",
        imagen: "static/img/ak3.png",
        categoria: { nombre: "Accesorios", id: "accesorios" },
        precio: 12000
    },
    {
        id: "41",
        titulo: "Mascara de zorro",
        imagen: "static/img/ak4.png",
        categoria: { nombre: "Accesorios", id: "accesorios" },
        precio: 12000
    },

    // Accesorios Jujutsu
    {
        id: "42",
        titulo: "Arma de nanami",
        imagen: "static/img/aj.png",
        categoria: { nombre: "Accesorios", id: "accesorios" },
        precio: 12000
    },
    {
        id: "43",
        titulo: "llavero de gojo",
        imagen: "static/img/aj2.png",
        categoria: { nombre: "Accesorios", id: "accesorios" },
        precio: 12000
    },
    {
        id: "44",
        titulo: "Audifonos",
        imagen: "static/img/aj3.png",
        categoria: { nombre: "Accesorios", id: "accesorios" },
        precio: 12000
    },
    {
        id: "45",
        titulo: "Collar",
        imagen: "static/img/aj4.png",
        categoria: { nombre: "Accesorios", id: "accesorios" },
        precio: 12000
    }
];

//Seccion de codigo JS carrito de compras con localstorage
//código Js

    const contenedorProductos = document.querySelector("#contenedor-productos");
    const botonesCategorias = document.querySelectorAll(".boton-categoria");
    const tituloPrincipal = document.querySelector("#titulo-principal");
    const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {


    contenedorProductos.innerHTML = "";


    productosElegidos.forEach(producto => {


        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;


        contenedorProductos.append(div);
    })


    actualizarBotonesAgregar();
}


cargarProductos(productos);


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {


        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");


        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }


    })
});


function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");


    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}


let productosEnCarrito;


let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);


    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }


    actualizarNumerito();


    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

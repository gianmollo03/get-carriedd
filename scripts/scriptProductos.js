//Productos
const tecladosArray = [
    {
        nombre: "SHIVA WHITE K512W",
        precio: 7000,
        stock: 5,
        imagen: "../media/images/SHIVA_WHITE_K512W.jpg"
    },
    {
        nombre: "MARVO KG965G",
        precio: 5000,
        stock: 2,
        imagen: "../media/images/MARVO_KG965G.jpg"
    },
    {
        nombre: "LG G213 PRODIGY",
        precio: 10000,
        stock: 4,
        imagen: "../media/images/LG_G213_PRODIGY.jpg"
    },
    {
        nombre: "CORSAIR HARPOON K55",
        precio: 9000,
        stock: 3,
        imagen: "../media/images/COMBO_CORSAIR_HARPOON_K55.jpg"
    }
]
const mousesArray = [{
    nombre: "REDRAGON M711 COBRA FPS",
    precio: 5500,
    stock:10,
    imagen:"../media/images/REDRAGON_M711_COBRA_FPS.jpg"
    },
    {
        nombre: "HYPERX PULSEFIRE SURGE",
        precio: 6500,
        stock: 3,
        imagen: "../media/images/HYPERX_PULSEFIRE_SURGE.jpg"
    },
    {
        nombre: "REDRAGON STORM ELITE M988",
        precio: 8600,
        stock: 2,
        imagen: "../media/images/REDRAGON_STORM_ELITE_M988.jpg"
    }
]
const combosArray = [
    {
        nombre: "COMBO CORSAIR HARPOON K55",
        precio: 12500,
        stock: 2,
        imagen: "../media/images/SHIVA_WHITE_K512W.jpg"
    }
]
const microfonosArray = []



//Creacion de HTML para cada objeto


//Objetos Teclados


const divClassProducts = document.getElementById("products_list")
console.log(divClassProducts)
tecladosArray.forEach((teclado) => {
    const divContenedorProducto = document.createElement("div")
    divContenedorProducto.className = "product-item teclados"
    const divContenedorAtributos = document.createElement("div")
    divContenedorAtributos.className = "product-desc";
    divContenedorAtributos.innerHTML = `
     <div class="image-product">
        <img src="${teclado.imagen}" alt="" width="80px" height="80px" style="background-color:white;">
    </div>
    <div class="producto-nombre-precio">
        <div>
            <p class="product-name"> ${teclado.nombre}</p>
        </div>
        <div class="producto-precio-carrito">
            <div>
                <p class="product-price">Precio: $${teclado.precio}</p>
            </div>
            <div class="boton-carrito">
                <button>Comprar ahora</button>
            </div>
        </div>
    </div>`
    divContenedorProducto.append(divContenedorAtributos)
    divClassProducts.append(divContenedorProducto)
})


//Objetos tipo Mouse


mousesArray.forEach((mouse) => {
    const divContenedorProducto = document.createElement("div")
    divContenedorProducto.className = "product-item mouses"
    const divContenedorAtributos = document.createElement("div")
    divContenedorAtributos.className = "product-desc";
    divContenedorAtributos.innerHTML = `
     <div class="image-product">
        <img src="${mouse.imagen}" alt="" width="80px" height="80px" style="background-color:white;">
    </div>
    <div class="producto-nombre-precio">
        <div>
            <p class="product-name"> ${mouse.nombre}</p>
        </div>
        <div class="producto-precio-carrito">
            <div>
                <p class="product-price">Precio: $${mouse.precio}</p>
            </div>
            <div class="boton-carrito">
                <button>Comprar ahora</button>
            </div>
        </div>
    </div>`
    divContenedorProducto.append(divContenedorAtributos)
    divClassProducts.append(divContenedorProducto)
    

})

//Objetos en combo


combosArray.forEach((combo) => {
    const divContenedorProducto = document.createElement("div")
    divContenedorProducto.className = "product-item combos"
    const divContenedorAtributos = document.createElement("div")
    divContenedorAtributos.className = "product-desc";
    divContenedorAtributos.innerHTML = `
     <div class="image-product">
        <img src="${combo.imagen}" alt="" width="80px" height="80px" style="background-color:white;">
    </div>
    <div class="producto-nombre-precio">
        <div>
            <p class="product-name"> ${combo.nombre}</p>
        </div>
        <div class="producto-precio-carrito">
            <div>
                <p class="product-price">Precio: $${combo.precio}</p>
            </div>
            <div class="boton-carrito">
                <button>Comprar ahora</button>
            </div>
        </div>
    </div>`
    divContenedorProducto.append(divContenedorAtributos)
    divClassProducts.append(divContenedorProducto)
    

})






//Productos array
const tecladosArray = []
const mousesArray = []
const combosArray = []


class Teclado {
    constructor(id,nombre,precio,stock,urlImagen){
        this.id = id
        this.nombre = nombre
        this.precio = parseInt(precio)
        this.stock = parseInt(stock)
        this.imagen = urlImagen
    }
}
class Mouse {
    constructor(id,nombre,precio,stock,urlImagen){
        this.id = id
        this.nombre = nombre
        this.precio = parseInt(precio)
        this.stock = parseInt(stock)
        this.imagen = urlImagen
    }
}
class Combo {
    constructor(id,nombre,precio,stock,urlImagen){
        this.id = id
        this.nombre = nombre
        this.precio = parseInt(precio)
        this.stock = parseInt(stock)
        this.imagen = urlImagen
    }
}

// PUSH DE OBJETOS
tecladosArray.push(new Teclado(1,"SHIVA WHITE K512W",7000,5,"../media/images/SHIVA_WHITE_K512W.jpg"))
tecladosArray.push(new Teclado(2,"LG G213 PRODIGY",7000,5,"../media/images/LG_G213_PRODIGY.jpg"))
tecladosArray.push(new Teclado(3,"MARVO KG965G",7000,5,"../media/images/MARVO_KG965G.jpg"))
tecladosArray.push(new Teclado(4,"CORSAIR HARPOON K55",7000,5,"../media/images/COMBO_CORSAIR_HARPOON_K55.jpg"))
mousesArray.push(new Mouse(1,"REDRAGON M711 COBRA FPS",5500,3,"../media/images/REDRAGON_M711_COBRA_FPS.jpg"))
mousesArray.push(new Mouse(2,"REDRAGON STORM ELITE M988",8000,3,"../media/images/REDRAGON_STORM_ELITE_M988.jpg"))
mousesArray.push(new Mouse(3,"REDRAGON M711 COBRA FPS",5500,3,"../media/images/"))
combosArray.push(new Combo(1,"COMBO CORSAIR HARPOON K55",13000,2,"../media/images/SHIVA_WHITE_K512W.jpg"))

//ID que le voy a proveer a los Teclados

 let contadorContenedoresBotonesCarrito = 0

//Adquiero el elemento product_list

const divClassProducts = document.getElementById("products_list")

//Creo el HTML para cada teclado
tecladosArray.forEach((teclado) => {
    //Creo el contenedor del producto
    const divContenedorProducto = document.createElement("div")
    //Asigno clase al producto
    divContenedorProducto.className = "product-item teclados"

    //Creo el contenedor de la descripcion del producto

    const divContenedorAtributos = document.createElement("div")
    //Asigno clase al contenedor
    divContenedorAtributos.className = "product-desc";

    //Creo el html para la descripcion del producto

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
            <div id ="teclado${contadorContenedoresBotonesCarrito}"class="boton-carrito">
                <button>Comprar</button>
            </div>
        </div>
    </div>`
  
    // localStorage.clear()
    //Append de la descripcion del producto al contenedor del item
    divContenedorProducto.append(divContenedorAtributos)
    //Append del contenedor  del item al DIV de productos general
    divClassProducts.append(divContenedorProducto)
    
    //Agregar al carrito (Función de teclados)
    const botonCarrito = document.getElementById(`teclado${contadorContenedoresBotonesCarrito}`)


    
    botonCarrito.addEventListener("click",añadirCarrito =>{
        let carritoActual = []
        const carritoStoraged = localStorage.getItem("carrito")
        console.log(JSON.parse(carritoStoraged))
        if(carritoStoraged){
            carritoActual = JSON.parse(carritoStoraged)
            console.log(carritoActual)
        }
        const indiceProductoEncontrado = carritoActual.findIndex((tecladoCarrito) =>{
            return tecladoCarrito.nombre === teclado.nombre
        }
        )
        if(indiceProductoEncontrado === -1){
            teclado.cantidad = 1
            carritoActual.push(teclado)
        }
        else{
            carritoActual[indiceProductoEncontrado].cantidad += 1 
        }
        console.log(carritoActual)
        localStorage.setItem("carrito",JSON.stringify(carritoActual))

        

    }


        )
        //Aumento el contador para proveer de un nuevo ID al item
    contadorContenedoresBotonesCarrito++
})

//Creo el HTML PARA LOS MOUSE
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
            <div id="mouse${contadorContenedoresBotonesCarrito}" class="boton-carrito">
            <button>Comprar</button>
            </div>
        </div>
    </div>`
    divContenedorProducto.append(divContenedorAtributos)
    divClassProducts.append(divContenedorProducto)

    const botonCarrito = document.getElementById(`mouse${contadorContenedoresBotonesCarrito}`)
    botonCarrito.addEventListener("click",añadirCarrito =>{
        carritoActual = []
        carritoStoraged = localStorage.getItem("carrito")
        if(carritoStoraged){
            carritoActual = JSON.parse(carritoStoraged)
        }
        const indiceProductoEncontrado = carritoActual.findIndex((mouseCarrito)=>{
            return mouseCarrito.nombre === mouse.nombre
        }
        )
        if(indiceProductoEncontrado === -1){
            mouse.cantidad = 1
            carritoActual.push(mouse)
        }
        else{
            carritoActual[indiceProductoEncontrado].cantidad += 1 
        }
        console.log(carritoActual)
        localStorage.setItem("carrito",JSON.stringify(carritoActual))

        

    }


        )
        
    contadorContenedoresBotonesCarrito++


})

//Objetos en combo

//CREO EL HTML PARA LOS COMBOS
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
            <div id="combo${contadorContenedoresBotonesCarrito}" class="boton-carrito">
            <button>Comprar</button>
            </div>
        </div>
    </div>`
    divContenedorProducto.append(divContenedorAtributos)
    divClassProducts.append(divContenedorProducto)

    const botonCarrito = document.getElementById(`combo${contadorContenedoresBotonesCarrito}`)
    botonCarrito.addEventListener("click",añadirCarrito =>{
        carritoActual = []
        carritoStoraged = localStorage.getItem("carrito")
        if(carritoStoraged){
            carritoActual = JSON.parse(carritoStoraged)
        }
        const indiceProductoEncontrado = carritoActual.findIndex((comboCarrito)=>{
            return comboCarrito.nombre === combo.nombre
        }
        )
        if(indiceProductoEncontrado === -1){
            combo.cantidad = 1
            carritoActual.push(combo)
        }
        else{
            carritoActual[indiceProductoEncontrado].cantidad += 1 
        }
        console.log(carritoActual)
        localStorage.setItem("carrito",JSON.stringify(carritoActual))

        
    }
    )
        //Aume
    contadorContenedoresBotonesCarrito++
})



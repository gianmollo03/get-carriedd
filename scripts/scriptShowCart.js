//Mostrar carrito 
const iconoCarrito = document.getElementById("iconoCarrito")
const contenedorCarrito = document.getElementById("contenedorCarrito")
const listaCarrito = document.getElementById("listaCarrito")
iconoCarrito.addEventListener("click",mostrarCarrito=>{
    contenedorCarrito.style = "display:flex; visibility:visible "
    //obtener carrito
    const carritoActualJSON = localStorage.getItem("carrito")
    const carritoActual = JSON.parse(carritoActualJSON)

    //Contador para generar las ID de los item
    let contadorItemCarrito = 0

    //Generar items del carrito
    
    for (const item of carritoActual){

        //Creacion elemento li
        itemCarrito = document.createElement("li")
        itemCarrito.id = `itemCarrito${contadorItemCarrito}`

        //Creacion del innerHTML del li


        itemCarrito.innerHTML = `
        <div class="imagenItemCarritoContenedor">
            <img src="${item.imagen}" class="imagenItemCarrito" alt="${item.nombre}">
        </div>
        <div class="contenedorDescripcionItemCarrito">
        <p class ="itemNombre"><strong>${item.nombre}</strong></p>
        <p class ="itemPrecio">$${item.precio}</p>
        <p class ="itemCantidad">Cantidad: ${item.cantidad}</p>
        </div>`

        //Aumento el contador para proveer una nueva ID al proximo Item

        contadorItemCarrito++

        //Añado el item a la lista

        listaCarrito.append(itemCarrito) 
    }

    //Boton de continuar compra

    const botonContinuarCompra = document.createElement("button")
    botonContinuarCompra.className = "botonComprar"
    botonContinuarCompra.innerText  ="Continuar"


    //Append de la lista al contenedor 
    contenedorCarrito.append(listaCarrito)
    //Append del boton de continuar al contenedor
    contenedorCarrito.append(botonContinuarCompra)

})


//Boton cerrar carrito
const botonCerrarCarrito = document.getElementById("cerrarCarrito")
botonCerrarCarrito.addEventListener("click",cerrarCarrito =>{
    listaCarrito.removeChild()
})
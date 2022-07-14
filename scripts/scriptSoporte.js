
const sectionFormulario = document.getElementById("Soporte")

function comprobarFormulario(){
    const comprobacionEnvio = sessionStorage.getItem("formularioEnviado")
    if(comprobacionEnvio !== null){
    formulario.style = "display:none"
    const formularioYaEnviado = document.createElement("div")
    formularioYaEnviado.className = "formularioYaEnviado";
    const mensajeDeFormularioYaEnviado = document.createElement("p")
    mensajeDeFormularioYaEnviado.className = "mensajeDeAdvertencia"
    mensajeDeFormularioYaEnviado.innerText = "Usted ya envió un formulario recientemente. Porfavor espere un tiempo antes de volver a mandar otro. Gracias."
    formularioYaEnviado.append(mensajeDeFormularioYaEnviado)
    sectionFormulario.append(formularioYaEnviado)
    return false

    }
    else{
        formulario.style = "display:none"
        const mensajeExitoContainer = document.createElement("div")
        mensajeExitoContainer.className = "mensajeExitoContainer"
        const mensajeExito = document.createElement("p")
        mensajeExito.className = "mensajeDeExito"
        mensajeExito.innerText = "El formulario fue enviado con éxito. ¡Muchas Gracias!"
        mensajeExitoContainer.append(mensajeExito)
        sectionFormulario.append(mensajeExitoContainer)
    }
}


 const formulario = document.createElement("form")
    formulario.className = "form";
    formulario.id = "formulario"
    formulario.innerHTML = ` <h1>Soporte</h1>
    <p>Ingrese los siguientes datos:</p>
    <div class="form-space-around" id="elementosFormulario">
        <div class="label-input">
            <label for="name">Nombre</label>
            <input type="text" id="name" name="name" class="inputText" placeholder="Ej: Gianluca" required>
        </div>
        <div class="label-input">
            <label for="last-name">Apellido/s</label>
            <input type="text" id="last-name" name="last-name" class="inputText" placeholder="Ej: Martinez" required>
        </div>
        <div class="label-input">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" class="inputText" placeholder="Ej: address@hotmail.com" required>
        </div>
        <div class="label-input"> 
            <label for="textbox">Comentarios</label>
            <textarea name="comments" id="textbox" cols="30" rows="10" class="textbox">
                
            </textarea>
        </div>
    </div>
    <div>
        <button type="submit" id="submit">Enviar</button>
    </div>`
    console.log(formulario.innerHTML)
    sectionFormulario.append(formulario)
const formularioSubmit = document.getElementById("formulario")
const nombre = document.getElementById("name")
const apellido = document.getElementById("last-name")
const email = document.getElementById("email")
const textbox = document.getElementById("textbox")

formulario.addEventListener("submit", (submitDatos)=>{
    submitDatos.preventDefault()
    comprobarFormulario()
    const formData = {
        nombre: nombre.value,
        apellido: apellido.value,
        email:email.value,
        mensaje:textbox.value
    }
    console.log(formData)
    const formDataJSON = JSON.stringify(formData)
    sessionStorage.setItem("formularioEnviado",1)
    sessionStorage.setItem("Datos de formulario",formDataJSON)
    
})
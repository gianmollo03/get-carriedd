const formulario = document.getElementById("form")
const inputNombre = document.getElementById("name")
const inputApellido = document.getElementById("last-name")
const inputEmail = document.getElementById("email")
const inputCajaTexto = document.getElementById("textbox")
const respuestaFormulario = document.getElementById("respuestaFormulario")

formulario.addEventListener("submit",(eventoFormulario) =>{
    eventoFormulario.preventDefault()
    const Formularios = {
        nombre : inputNombre.value,
        apellido : inputApellido.value,
        email :  inputEmail.value,
        Queja : inputCajaTexto.value
    }
    console.log(` ${inputNombre.value} - ${inputApellido.value} - ${inputEmail.value} - ${inputCajaTexto.value}`)
    formulario.style = "visibility:hidden"
    respuestaFormulario.style = "visibility:visible"

})  
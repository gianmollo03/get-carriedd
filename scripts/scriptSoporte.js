const formulario = document.getElementById("formulario");
const nombreInput = document.getElementById("name");
const apellidoInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const textboxInput = document.getElementById("textbox");

formulario.addEventListener("submit", (submitForm) => {
  event.preventDefault();
  let contadorDeFormulariosIguales = 0;
  let formularioAEnviar = {
    nombre: nombreInput.value,
    apellido: apellidoInput.value,
    email: emailInput.value,
    texto: textboxInput.value,
  };
  console.log(formularioAEnviar);
  const formularioEnviadoJSON = localStorage.getItem("formularios");
  console.log(formularioEnviadoJSON);
  if (formularioEnviadoJSON !== null) {
    const formulariosEnviados = JSON.parse(formularioEnviadoJSON);
    for (const formularios of formulariosEnviados) {
      if (formularios.nombre === formularioAEnviar.nombre) {
        contadorDeFormulariosIguales = +1;
      }
    }
    if (contadorDeFormulariosIguales !== 0) {
      Swal.fire(
        "Error",
        "Ya has enviado un formulario recientemente, espera un poco para mandar otro.",
        "error"
      );
    } else {
      formulariosEnviados.push(formularioAEnviar);
      console.log(formulariosEnviados);
      localStorage.setItem("formularios", JSON.stringify(formulariosEnviados));
      Swal.fire(
        "¡Muchas Gracias!",
        "El formulario fue enviado correctamente.",
        "success"
      );
    }
  } else {
    const formulariosEnviados = [];
    formulariosEnviados.push(formularioAEnviar);
    localStorage.setItem("formularios", JSON.stringify(formulariosEnviados));
    Swal.fire(
      "¡Muchas Gracias!",
      "El formulario fue enviado correctamente.",
      "success"
    );
  }
});

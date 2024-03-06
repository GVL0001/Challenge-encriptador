//Función de encriptador
function encryptText() {
  let textInput = document.getElementById("text-input").value;
  let standbyTitle = document.getElementById("standby-tittle");
  let standbyParagrahp = document.getElementById("standby-paragraph");
  let standbyImage = document.getElementById("standby-image");

  let encryptedText = textInput
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (textInput.length != 0) {
    document.getElementById("standby-paragraph").value = encryptedText;
    standbyTitle.textContent = "";
    standbyParagrahp.textContent = encryptedText;
    standbyImage.src = "";
    // Ocultar imagen y título
    standbyImage.style.display = "none";
    standbyTitle.style.display = "none";
    // Agregar clase al párrafo
    standbyParagrahp.classList.add("formatted-text");
    //mostrar copiar
    showCopyButton();
  } else {
    standbyImage.src = "./img/Muñeco.png";
    standbyTitle.textContent = "Ningún mensaje fue encontrado";
    standbyParagrahp.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

//Función desencriptador
function decryptText() {
  let textInput = document.getElementById("text-input").value;
  let standbyTitle = document.getElementById("standby-tittle");
  let standbyParagrahp = document.getElementById("standby-paragraph");
  let standbyImage = document.getElementById("standby-image");
  let decryptedText = textInput
    .replace(/ufat/g, "u")
    .replace(/ober/g, "o")
    .replace(/imes/g, "i")
    .replace(/enter/g, "e")
    .replace(/ai/g, "a");

  if (textInput.length !== 0) {
    document.getElementById("standby-paragraph").value = decryptedText;
    standbyTitle.textContent = "";
    standbyParagrahp.textContent = decryptedText;
    standbyImage.src = "";
    standbyImage.style.display = "none";
    standbyTitle.style.display = "none";
    standbyParagrahp.classList.add("formatted-text");
    showCopyButton();
  } else {
    standbyImage.src = "./img/Muñeco.png";
    standbyTitle.textContent = "Ningún mensaje fue encontrado";
    standbyParagrahp.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

//Limitar texto para no permitir mayusculas ni acentos//
function limitarTexto() {
  let textarea = document.getElementById("text-input");
  let contenido = textarea.value;
  // Convertir todo el texto a minúsculas y sin acentos
  let textoSinAcentos = contenido
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  // Permitir solo letras y espacios
  let textoFiltrado = textoSinAcentos.replace(/[^a-z ]/g, "");
  // Actualizar el contenido del textarea
  textarea.value = textoFiltrado;
}


//Función para copiar el texto
function copyText() {
  // Seleccionar el párrafo encriptado
  var encryptedParagraph = document.getElementById("standby-paragraph");
  // Crear un elemento de texto temporal
  var tempInput = document.createElement("textarea");
  tempInput.value = encryptedParagraph.textContent;
  // Agregar el elemento temporal al DOM
  document.body.appendChild(tempInput);
  // Seleccionar y copiar el contenido del elemento temporal
  tempInput.select();
  document.execCommand("copy");
  // Eliminar el elemento temporal del DOM
  document.body.removeChild(tempInput);
  // Mostrar un mensaje de éxito usando sweetalert
  swal("¡Texto copiado!", "El texto encriptado ha sido copiado al portapapeles.", "success");
}


// Función para mostrar el botón de copiar
function showCopyButton() {
  var copyButton = document.querySelector(".copy-button");
  copyButton.style.display = "block";
}
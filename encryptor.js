//Función de encriptador y desencriptador
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
  } else {
    standbyImage.src = "./img/muñeco.png";
    standbyTitle.textContent = "Ningún mensaje fue encontrado";
    standbyParagrahp.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function decryptText() {
  let textInput = document.getElementById("text-input").value;
  let standbyTitle = document.getElementById("standby-tittle");
  let standbyParagrahp = document.getElementById("standby-paragraph");
  let standbyImage = document.getElementById("standby-image");

  let encryptedText = textInput
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
    if (textInput.length != 0) {
      document.getElementById("standby-paragraph").value = encryptedText;
      standbyTitle.textContent = "";
      standbyParagrahp.textContent = encryptedText;
      standbyImage.src = "";
    } else {
      standbyImage.src = "./img/muñeco.png";
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
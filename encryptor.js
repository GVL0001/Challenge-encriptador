//Función de encriptador y desencriptador
function encriptarTexto() {
    const textoOriginal = document.getElementById("textoOriginal").value;
    const textoEncriptado = encriptar(textoOriginal);
    document.getElementById("textoResultado").value = textoEncriptado;
  }

  function desencriptarTexto() {
    const textoEncriptado = document.getElementById("textoOriginal").value;
    const textoOriginal = desencriptar(textoEncriptado);
    document.getElementById("textoResultado").value = textoOriginal;
  }

  function encriptar(texto) {
    let textoEncriptado = texto.replace(/e/g, "enter")
                              .replace(/i/g, "imes")
                              .replace(/a/g, "ai")
                              .replace(/o/g, "ober")
                              .replace(/u/g, "ufat");
    return textoEncriptado;
  }

  function desencriptar(textoEncriptado) {
    let textoOriginal = textoEncriptado.replace(/enter/g, "e")
                                    .replace(/imes/g, "i")
                                    .replace(/ai/g, "a")
                                    .replace(/ober/g, "o")
                                    .replace(/ufat/g, "u");
    return textoOriginal;
  }
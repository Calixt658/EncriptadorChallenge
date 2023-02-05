const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
  let matrisCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrisCodigo.length; i++) {
    if (stringEncriptada.includes(matrisCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrisCodigo[i][0],matrisCodigo[i][1]);
    }
  }
  return stringEncriptada;
}
function btnDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
}

function desencriptar(stringDesencriptada) {
  let matrisCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrisCodigo.length; i++) {
    if (stringDesencriptada.includes(matrisCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrisCodigo[i][1],matrisCodigo[i][0]);
    }
  }
  return stringDesencriptada;
}
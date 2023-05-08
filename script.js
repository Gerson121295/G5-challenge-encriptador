

const textArea = document.querySelector(".text-area");
 textArea.value = '';
const mensaje = document.querySelector(".mensaje");
mensaje.value = ''; /* el valor inicio de textArea es vacio */
const notaInformativa = document.querySelector(".nota-informativa")
const copiar = document.querySelector(".btn-copiar");
copiar.style.display="none" /* No muestra el boton copiar al inicio */

const cerrar = document.querySelector(".cerrar")
cerrar.style.display="none"

function validarTextoIngresado(){
    let textoIngresado = document.querySelector(".text-area").value;  
    let validador = textoIngresado.match(/^[a-z !#?()"'/&|¡¿.,*-+$]+$/); /*letras que no se aceptarán /^[^A-ZáéíóúÁÉÍÓÚñÑ\s]+$/g */  /* (/^[a-z ]*$/); */

    if(!validador || validador === 0){
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function cerrarResultado(){
    
    mensaje.value=''
    textArea.value=''
    mensaje.style.backgroundImage="" 
    notaInformativa.style.display=""
    copiar.style.display="none"
    cerrar.style.display="none"
   
    
}

function btnEncriptar(){
    if(!validarTextoIngresado()){ 
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        cerrar.style.display="block" /*Boton cerrar */
        textArea.value= ""; /*Limpia el texto de la pantalla */
        mensaje.style.backgroundImage="none"  /* desaparece la imagen al encriptar */
        notaInformativa.style.display="none"
        copiar.style.display="block"
       
    }
}

/* 
Las "llaves" de encriptación que utilizaremos son las siguientes:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 
*/

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    /* console.table(matrizCodigo); */
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){ //ingresada a la array
            //sustitucion las vocales por las de encriptacion
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]) //replaceAll - sustituir todo, [i]=indice [0]=posicion Sustituye "e" para "enter"
        }
    }
    return stringEncriptada 
}



function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    cerrar.style.display="block" /*Boton cerrar */
    textArea.value= ""; /*Limpia el texto de la pantalla */
    mensaje.style.backgroundImage="none"   /* desaparece la imagen al encriptar */
    notaInformativa.style.display="none"
    copiar.style.display="block"
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    /* console.table(matrizCodigo); */
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){ //ingresada a la array: indice 1 posicion 1
            //sustitucion las vocales por las de encriptacion
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]) //replaceAll - sustituir todo, Sustituye "enter" para "e"
        }
    }

    return stringDesencriptada
    
}



function copiarMensaje() {

  // Select the text field
    mensaje.select();

   // Copy the text inside the text field
  navigator.clipboard.writeText(mensaje.value);
  // Alert the copied text  alert("Texto copiado: " + mensaje.value);
  alert("Texto copiado");
  mensaje.value=''
  mensaje.style.backgroundImage="" 
  notaInformativa.style.display=""
  copiar.style.display="none"
  cerrar.style.display="none"

}
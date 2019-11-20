
//CIFRAR
let infotextdeci = document.getElementById("output");//resultado
let bottonCifrar = document.getElementById("myBtnCifrar"); //guarde botton para Cifrar
bottonCifrar.addEventListener("click", enviartexto); //dar evento a botton Cifrar

function enviartexto(){
  let infotext=document.getElementById("textInput").value; //guardar los datos del texto ingresado
  let infonumero=document.getElementById("shift").value; //guardar el numero de desplazamiento del texto cifrado o decifrado
  let infooutput = cipher.encode(infonumero, infotext);//resultado en cipher.js

  infotextdeci.innerHTML = infooutput; 
  }


//DECIFRAR
let bottonDecifrar = document.getElementById("myBtnDecifrar"); //guarde botton Decifrar
bottonDecifrar.addEventListener("click", decifrartexto); //dar evento a botton Decifrar

function decifrartexto(){
  let infotext=document.getElementById("textInput").value; //guardar los datos del texto ingresado
  let infonumero = document.getElementById("shift").value; //guardar el numero de desplazamiento del texto cifrado o decifrado
  let infooutput=window.cipher.decode(infonumero, infotext); //mostrar el resultado del texto cifrado o decifrado

  infotextdeci.innerHTML = infooutput; 
  }


//BOTON para COPPYING 
let bottonCopiar = document.getElementById("myBtnCopiar"); //guarde botton Copiar
bottonCopiar.addEventListener("click", copyText); //dar evento a botton Copiar

function copyText() {
    var texttocoppy=document.getElementById("output");
    texttocoppy.value; 
    texttocoppy.select();
    document.execCommand("copy");
    alert("Copied the text: " + texttocoppy.value);
    }
  
//BOTON para ERASING
let bottonLimpiar = document.getElementById("myBtnLimpiar"); //guarde botton Copiar
bottonLimpiar.addEventListener("click", eraseText); //dar evento a botton Copiar

  function eraseText() {
    document.getElementById("output").value = "";
    document.getElementById("textInput").value="";
    location.reload();
  }
window.cipher = {
  encode: (infonumero, infotext) => { 
    let palabra;
    let resultadoLetras= "";

  for(let i=0; i < infotext.length; i++){ //recorre el texto y vea los posiciones
    let resultadoNumero;
    palabra = infotext.charCodeAt(i);

    if(palabra >=65 && palabra <= 90 ){ //solo mayusculas
      resultadoNumero = (palabra - 65 + parseInt(infonumero))% 26 + 65; //transformacion a Ascii en numero
      resultadoLetras = resultadoLetras + String.fromCharCode(resultadoNumero); //transformacion a letras
    }

    if (palabra ===32){
      resultadoLetras += " "
    }
    }
    return resultadoLetras;
  },    


  decode: (infonumero, infotext) => {
    let palabra;
    let resultadoLetras= "";
    
    for(let i=0; i < infotext.length; i++){ //recorre el texto y vea los posiciones
      let resultadoNumeroDecifrado;
      palabra = infotext.charCodeAt(i);
    
      if(palabra >=65 && palabra <= 90 ){ //solo mayusculas
        resultadoNumeroDecifrado = (palabra - 90 - parseInt(infonumero))% 26 + 90; //transformacion a Ascii en numero
        resultadoLetras = resultadoLetras + String.fromCharCode(resultadoNumeroDecifrado); //transformacion a letras
    }
      
    }
  
  return resultadoLetras;
}

}
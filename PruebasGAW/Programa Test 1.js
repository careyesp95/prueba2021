    // declaro mi variable de entrada como array
    var num = prompt("Ingrese un numero de 10 cifras entre 0 y 9: "); 
    // declaro un diccionario en relacion a la tabla de espesificaciones para despues realizar la comparacion con mi array "num"
    var dicc = {0:"S",1:"U",2:"T",3:"P",4:"A",5:"G",6:"M",7:"E",8:"L",9:"C",};
    var frase = "";
    // especifico la excepción estricta del programa en referencia 
    if (num.length != 10){
      console.error("Ingreso un numero invalido debe ser de 10 digitos")
    //En caso que el array sea estrictamente de 10 cifras, recorrera la variable i el array y lo comparara con el diccionario creado y despues concateno los string como resultado final.  
    } else {  
      for (i in num){
          console.log(num[i])
          if (num[i] in dicc){
              frase = frase + dicc[num[i]]  
          }
       }
      console.log(frase)

    }
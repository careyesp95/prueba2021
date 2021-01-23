// creamos una funcion que se llama Tpitagorica que contenga las variables a, b ,c
function Tpitagorica ( a, b, c){
    var encontrado = false; 
    // declaramos 3 bucles que van recorrer los limites de a, b y c, cada vez que se realice un bucle va comparar si la sumatoria es igual a 1000 si es asi salta al if y opera.
      for (a=1; a<333 && !encontrado; a++){       //bucle del parametro a
        for (b=1; b<666 && !encontrado; b++){    //bucle del parametro b
          for (c=1; c<999 && !encontrado; c++){ //bucle del parametro c
              if (a+b+c == 1000){              // referencia por cada iteracion, sera comprobada con el parametro 1000, para saber si sigue o ya encontro el valor 
                if(a*a + b*b == c*c){
                  console.log(a,b,c);
                  encontrado = true;
                 }
               }
           }
         }
       }
   }
   Tpitagorica()
    // comentario de una linea
    /* comentario 
    de 
    varias
    lineas
    */
    alert("Hola");
    var saludo = "Hola como estas?";
    alert(saludo);
    var numero1 = 5;
    var numero2 = 8;
    var suma = numero1 + numero2;
    document.write("<p>El resultado de la suma es:</p>");
    document.write(suma);

    console.log("Hola desde la consola");

    /* tipos de datos
     - numericos (Number) -> (Integer, Float, Real)
     - cadenas de texto (String)
     - Booleanos (True, False)
     - Arreglos
     - Objetos
     - Funciones
    */

    var bool = true;

    /* Tipos de operadores
     - Asignacion (=) 
     - Matematicos o Aritmeticos (+, -, *, /, %)
     - Incremento y Decremento
     - Operadores logicos (Negacion, and(y) &&, or(o) ||)
     - Operadores de comparacion (>, <, ==, !=, >=, <=)
    */

    var resta = numero2 - numero1;
    document.write("<p>La resta es: " + resta + "</p>");
    var mult = numero1 * numero2;
    document.write("<p>La mult es: " + mult + "</p>");
    var div = numero2 / numero1;
    document.write("<p>La div es: " + div + "</p>");
    var resto = numero2 % numero2;
    document.write("<p>La resto de div es: " + resto + "</p>");
    /* 
    dividendo |____ divisor
      resto     cociente

    */

  numero1++ // numero1 = numero1 + 1;
  numero1-- // numero1 = numero1 - 1;

  var result = numero1 < numero2;
  console.log(result);
  var texto1 = "hola";
  var texto2 = "chau";
  var resultTexto = texto1 != texto2;
  console.log(resultTexto);

  var combinacion = (numero1 < numero2) || (texto1 == texto2);
  console.log("Se cumplieron ambas?: " + combinacion);
  

  // Condicionales
  if (numero1 < numero2) {
    console.log(numero1 + " es menor que " + numero2);
  } else{
    console.log(numero1 + " no es menor que " + numero2);
  }

  // Iteraciones (loops, repeticiones, bucles)
  console.log("Inicio del bucle");
  while (numero1 < numero2) {
    console.log(numero1 + " es menor que " + numero2);
    numero1++;
  }

  for (let index = 0; index < 10; index++) { // index = index + 1
     console.log(index);   
  }

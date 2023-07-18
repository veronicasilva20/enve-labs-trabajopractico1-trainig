 // Ejecutar el menú
// menu();
// function main() {
//   let opcion=2;
//   let array =[];
//   switch (opcion) {
//     case 1:
//       console.log ("opcion1: rellenar la matriz");
//       matriz
//       break;
  
//     case 2:
//       //a:queremos agregar una codicion para ver si  se ejecuto la opcion 1
//       //a:si opcion 1 =>array esta lleno
//       console.log("despues opcion2")
//       if(array,length <=0)return alert("complete la matriz (opcion1)")
//       connsole.log("despues opcion2")
//       break;
//       case 3:
//         console.log("opcion 3")
//         break;
//         default :
//         console.log("opcion DEFAULT")
//   }
// }


// Nos piden crear una matriz de 4×4 de números enteros que inicialmente esta vacía, nos piden hacer un menú con estas opciones:
// Rellenar TODA la matriz de números, debes pedírselo al usuario.


function crearMatrizVacia(filas, columnas) {
  let matriz = [];
  for (let i = 0; i < filas; i++) {
    const fila = [];
    for (let j = 0; j < columnas; j++) {
      fila.push(0);
    }
    matriz.push(fila);
  }
  return matriz;
}
function rellenarMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      matriz[i][j] = parseInt(prompt(`Ingrese el valor para la posición [${i + 1}][${j + 1}]:`));
    }
  }
}
function sumarFila(matriz, fila) {
  let suma = 0;
  if (fila >= 1 && fila <= matriz.length) {
    for (let j = 0; j < matriz[fila - 1].length; j++) {
      suma += matriz[fila - 1][j];
    }
  }
  return suma;
}
function sumarColumna(matriz, columna) {
  let suma = 0;
  if (columna >= 1 && columna <= matriz[0].length) {
    for (let i = 0; i < matriz.length; i++) {
      suma += matriz[i][columna - 1];
    }
  }
  return suma;
}
function sumarDiagonalPrincipal(matriz) {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    suma += matriz[i][i];
  }
  return suma;
}
function sumarDiagonalInversa(matriz) {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    suma += matriz[i][matriz.length - 1 - i];
  }
  return suma;
}
function calcularMedia(matriz) {
  let suma = 0;
  let cantidadElementos = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      suma += matriz[i][j];
      cantidadElementos++;
    }
  }
  return suma / cantidadElementos;
}
function mostrarMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i]);
  }
}
function mostrarMenu(matriz) {
  let opcion;
  do {
    opcion = parseInt(prompt(
      `MENU
      1. Rellenar la matriz
      2. Suma de una fila
      3. Suma de una columna
      4. Sumar la diagonal principal
      5. Sumar la diagonal inversa
      6. Calcular la media de la matriz
      0. Salir
      Ingrese una opción:`
    ));
    switch (opcion) {
      case 1:
        rellenarMatriz(matriz);
        mostrarMatriz(matriz);
        break;
      case 2:
        let filaSuma = parseInt(prompt("Ingrese el número de la fila a sumar:"));
        let sumaFila = sumarFila(matriz, filaSuma);
        if (sumaFila !== 0) {
          console.log(`La suma de la fila ${filaSuma} es: ${sumaFila}`);
          alert(`La suma de la fila ${filaSuma} es: ${sumaFila}`);
        } else {
          console.log("La fila ingresada no es válida");
          alert("La fila ingresada no es válida");
        }
        break;
      case 3:
        let columnaSuma = parseInt(prompt("Ingrese el número de la columna a sumar:"));
        let sumaColumna = sumarColumna(matriz, columnaSuma);
        if (sumaColumna !== 0) {
          console.log(`La suma de la columna ${columnaSuma} es: ${sumaColumna}`);
          alert(`La suma de la columna ${columnaSuma} es: ${sumaColumna}`);
        } else {
          console.log("La columna ingresada no es válida");
          alert("La columna ingresada no es válida");
        }
        break;
      case 4:
        let sumaDiagonalPrincipal = sumarDiagonalPrincipal(matriz);
        console.log(`La suma de la diagonal principal es: ${sumaDiagonalPrincipal}`);
        alert(`La suma de la diagonal principal es: ${sumaDiagonalPrincipal}`)
        break;
      case 5:
        let sumaDiagonalInversa = sumarDiagonalInversa(matriz);
        console.log(`La suma de la diagonal inversa es: ${sumaDiagonalInversa}`);
        alertlog(`La suma de la diagonal inversa es: ${sumaDiagonalInversa}`);
        break;
      case 6:
        let media = calcularMedia(matriz);
        console.log(`La media de la matriz es: ${media}`);
        alert(`La media de la matriz es: ${media}`)
        break;
      case 0:
        console.log("¡Hasta luego!");
        alert("¡Hasta luego!");
        break;
      default:
        console.log("Opción inválida. Intente nuevamente.");
        alert("Opción inválida. Intente nuevamente.");
        break;
    }
  } while (opcion !== 0);
}
let matriz = crearMatrizVacia(4, 4);
mostrarMenu(matriz);

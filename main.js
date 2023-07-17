//declaro una array 4 x 4:

let matriz = nuevaArray(4);

//utilizo for para repetir desde 0 hasta el numero 3 ,creo un array vacio para cada fila de la matriz utilizando "matriz[i]= nuevo array(4),esta crea un array de 4 elementos para cada fila completando asi las columnas de la matriz"
//se imprime la matriz vacia utilizo console.log(matriz)contiene elementos undefined
for (let i = 0; i < 4; i++) {
  matriz[i] = nuevaArray(4);
}

console.log(matriz);

//Después de completar la matriz matriz1, se solicita al usuario que ingrese el número de una fila para calcular la suma de los elementos de esa fila.
        // Se utiliza un condicional if para verificar si el número de fila ingresado es válido (entre 0 y 3).
        // Si es válido, se utiliza un bucle for para sumar los elementos de la fila seleccionada utilizando sumaFila += matriz1[filaSeleccionada][j].
        // Finalmente, se muestra el resultado de la suma de la fila seleccionada utilizando console.log()

let matriz1 = [];

for (let i = 0; i < 4; i++) {
  matriz1[i] = [];
  for (let j = 0; j < 4; j++) {
    let numero = parseInt(prompt(`Ingrese el número para la posición [i][j]:`));
    matriz1[i][j] = numero;
  }
}

let filaSeleccionada = parseInt(prompt("Ingrese el número de la fila a sumar (0-3):"));
let sumaFila = 0;

if (filaSeleccionada >= 0 && filaSeleccionada <= 3) {
  for (let j = 0; j < 4; j++) {
    sumaFila += matriz1[filaSeleccionada][j];
  }
  console.log(`La suma de los elementos de la fila ${filaSeleccionada} es: ${sumaFila}`);
} else {
  console.log("Fila inválida. Por favor, ingrese un número de fila válido (0-3).");
}


// A continuación, se declara otra matriz llamada matriz2 como un array vacío [].
//         Se sigue un proceso similar al paso 5-8 para completar matriz2.
//         Luego, se solicita al usuario que ingrese el número de una columna para calcular la suma de los elementos de esa columna.
//         Se utiliza un condicional if para verificar si el número de columna ingresado es válido (entre 0 y 3).
//         Si es válido, se utiliza un bucle for para sumar los elementos de la columna seleccionada utilizando sumaColumna += matriz2[i][columnaSeleccionada].
//         Se muestra el resultado de la suma de la columna seleccionada utilizando console.log().

let matriz2 = [];

for (let i = 0; i < 4; i++) {
  matriz2[i] = [];
  for (let j = 0; j < 4; j++) {
    let numero = parseInt(prompt(`Ingrese el número para la posición [${i}][${j}]:`));
    matriz2[i][j] = numero;
  }
}

let columnaSeleccionada = parseInt(prompt("Ingrese el número de la columna a sumar (0-3):"));
let sumaColumna = 0;

if (columnaSeleccionada >= 0 && columnaSeleccionada <= 3) {
  for (let i = 0; i < 4; i++) {
    sumaColumna += matriz2[i][columnaSeleccionada];
  }
  console.log(`La suma de los elementos de la columna ${columnaSeleccionada} es: ${sumaColumna}`);
} else {
  console.log("Columna inválida. Por favor, ingrese un número de columna válido (0-3).");
}

// Se declara otra matriz llamada matriz3 como un array vacío []. Se sigue un
//       proceso similar al paso 5-8 para completar matriz3. Se utiliza un bucle
//       for para calcular la suma de los elementos de la diagonal principal y la
//       diagonal inversa. Se muestran los resultados de las sumas utilizando
//       console.log().


let matriz3 = [];

for (let i = 0; i < 4; i++) {
  matriz3[i] = [];
  for (let j = 0; j < 4; j++) {
    let numero = parseInt(prompt(`Ingrese el número para la posición [${i}][${j}]:`));
    matriz3[i][j] = numero;
  }
}

let sumaDiagonalPrincipal = 0;
let sumaDiagonalInversa = 0;

for (let i = 0; i < 4; i++) {
  sumaDiagonalPrincipal += matriz3[i][i];
  sumaDiagonalInversa += matriz3[i][3 - i];
}

console.log(`La suma de la diagonal principal es: ${sumaDiagonalPrincipal}`);
console.log(`La suma de la diagonal inversa es: ${sumaDiagonalInversa}`);

// Luego, se declara otra matriz llamada matriz4 como un array
// vacío []. Se inicia un bucle while que continúa hasta que se ingrese una
// matriz válida. Dentro del bucle, se sigue un proceso similar al paso 5-8
// para completar matriz4. Se llama a la función verificarMatriz(matriz4)

let matriz4 = [];

let matrizValida = false;

while (!matrizValida) {
  matriz4 = [];

  for (let i = 0; i < 4; i++) {
    matriz4[i] = [];
    for (let j = 0; j < 4; j++) {
      let numero = parseInt(prompt(`Ingrese el número para la posición [${i}][${j}]:`));
      matriz4[i][j] = numero;
    }
  }

  matrizValida = verificarMatriz(matriz4);

  if (!matrizValida) {
    console.log("Matriz inválida. Por favor, vuelva a ingresar la matriz.");
  }
}

console.log("Matriz válida:", matriz4);

// para verificar si la matriz ingresada es válida. Esta función comprueba si
//       todos los elementos de la matriz son números utilizando un bucle for. Si
//       la matriz es inválida, se muestra un mensaje de error y se solicita al
//       usuario que ingrese la matriz nuevamente. Una vez que se ingresa una
//       matriz válida, se muestra la matriz utilizando console.log(). Al final, se
//       define la función verificarMatriz(matriz) que verifica si todos los
//       elementos de la matriz son números. Si algún elemento no es un número, la
//       función devuelve false; de lo contrario, devuelve true. Este código
//       permite al usuario ingresar valores para cada posición de la matriz y
//       realizar operaciones como sumar filas, columnas y diagonales.


// Función para verificar si una matriz es válida

function verificarMatriz(matriz) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (isNaN(matriz[i][j])) {
        return false;
      }
    }
  }
  return true;
}




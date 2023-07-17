let matriz = new Array(4);

for (let i = 0; i < 4; i++) {
  matriz[i] = new Array(4);
}

console.log(matriz);

let matriz1 = [];

for (let i = 0; i < 4; i++) {
  matriz1[i] = [];
  for (let j = 0; j < 4; j++) {
    let numero = parseInt(prompt(`Ingrese el número para la posición [${i}][${j}]:`));
    matriz1[i][j] = numero;
  }
}

const filaSeleccionada = parseInt(prompt("Ingrese el número de la fila a sumar (0-3):"));
let sumaFila = 0;

if (filaSeleccionada >= 0 && filaSeleccionada <= 3) {
  for (let j = 0; j < 4; j++) {
    sumaFila += matriz1[filaSeleccionada][j];
  }
  console.log(`La suma de los elementos de la fila ${filaSeleccionada} es: ${sumaFila}`);
} else {
  console.log("Fila inválida. Por favor, ingrese un número de fila válido (0-3).");
}

let matriz2 = [];

for (let i = 0; i < 4; i++) {
  matriz2[i] = [];
  for (let j = 0; j < 4; j++) {
    const numero = parseInt(prompt(`Ingrese el número para la posición [${i}][${j}]:`));
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

let matriz3 = [];

for (let i = 0; i < 4; i++) {
  matriz3[i] = [];
  for (let j = 0; j < 4; j++) {
    const numero = parseInt(prompt(`Ingrese el número para la posición [${i}][${j}]:`));
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

let matriz4 = [];

let matrizValida = false;

while (!matrizValida) {
  matriz4 = [];

  for (let i = 0; i < 4; i++) {
    matriz4[i] = [];
    for (let j = 0; j < 4; j++) {
      const numero = parseInt(prompt(`Ingrese el número para la posición [${i}][${j}]:`));
      matriz4[i][j] = numero;
    }
  }

  matrizValida = verificarMatriz(matriz4);

  if (!matrizValida) {
    console.log("Matriz inválida. Por favor, vuelva a ingresar la matriz.");
  }
}

console.log("Matriz válida:", matriz4);

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



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

//crear una matriz de 4×4 de números enteros que inicialmente esta vacía:
let matriz;

function crearMatriz4x4() {
    let matriz = [];
    for (let i = 0; i < 4; i++) {
        let fila = [];
        for (let j = 0; j < 4; j++) {
            
            let numero = pedirNumeroUsuario("ingrese un numero para rellenar la matriz: [" + i + "] [" + j + "]:");
            fila.push(numero)
        }
        matriz.push(fila)
    }
    console.table(matriz);

    return matriz;
}


//creo funcion: ingresar numero

function pedirNumeroUsuario(mensaje) {
    let numero
    do {
        numero = parseInt(prompt(mensaje));
        if (isNaN(numero)) {
            alert("El valor ingresado no es un numero, por favor ingrese un numero")
        }
    } while (isNaN(numero))  
    return numero;
}


//Suma de una fila que se pedirá al usuario (controlar que elija una correcta)

function sumarFila() {
    let filaElegida = pedirNumeroUsuario("Ingrese el número de la fila que desea sumar");

    if (filaElegida < 0 || filaElegida >= matriz.length) {
        console.log("El numero de fila ingresado es incorrecto");
        return;
    }

    let suma = 0;
    for (let j = 0; j < matriz[filaElegida].length; j++) {
        suma += matriz[filaElegida][j];
    }

    return suma;
}


//Suma de una columna que se pedirá al usuario (controlar que elija una correcta) 

function sumarColumna() {
    let columnaSeleccionada = pedirNumeroUsuario("Ingrese el número de columna que desea sumar (0-" + (matriz[0].length - 1) + "):");

    if (columnaSeleccionada < 0 || columnaSeleccionada >= matriz[0].length) {
        console.log("Columna inválida. Debe ser un número entre 0 y " + (matriz[0].length - 1));
        return;
    }

    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][columnaSeleccionada];
    }

    return suma;
}

//Sumar la diagonal principal (ej)
 
function sumarDiagonalPrincipal(matriz) {
    let suma = 0;

    for (let i = 0; i < matriz.length; i++) {
        if (matriz[i].length <= i) {
            break; 
        }
        suma += matriz[i][i];
    }

    return suma;
}

//Sumar la diagonal inversa (ej)

function sumarDiagonalInversa(matriz) {
    let suma = 0;
    let j = matriz.length - 1;

    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][j];
        j--;
    }

    return suma;
}


//La funcion calcularMedia me va a sumar la totalidad de los elementos

function calcularMedia(matriz) {
    let total = 0;
    let cantidadElementos = 0;
  
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        total += matriz[i][j];
        cantidadElementos++;
      }
    }
  
    return total / cantidadElementos;
  }

//  funcion principal:utilizo el prompt,swich case,if 
 
function menu() {
    let opcion;
    do { 
        opcion = parseInt(prompt("Ingrese una opción:\n" + "1- Crear matriz\n" + "2- Sumar fila\n" + "3- Sumar columna\n" + "4- Sumar diagonal principal\n" + "5- Sumar diagonal inversa\n" + "6- Calcular la media\n" + "0- Salir"));
        switch (opcion) {
            case 1:
                matriz = crearMatriz4x4();
                break;
            case 2:
                if (matriz == undefined) {
                    alert("debe completar la opcion N1")
                } else {
                    let sumaFila = sumarFila();
                    console.log("la suma de los elementos de la fila seleccionada es: " + sumaFila);
                }
                break;
            case 3:
                if (matriz == undefined) {
                    alert("Debe completar la opcion N1")
                } else {
                    let sumaColumna = sumarColumna();
                    console.log("la suma de los elementos de la columna seleccionada es: " + sumaColumna);
                }
                break;
            case 4:
                if (matriz == undefined) {
                    alert("debe completar la opcion N1")
                } else {
                    let sumaDiagonalPrincipal = sumarDiagonalPrincipal(matriz);
                    console.log("la suma de los elementos de la diagonal principal es: " + sumaDiagonalPrincipal);
                }
                break;
            case 5:
                if (matriz == undefined) {
                    alert("debe completar la opcion N1")
                } else {
                    let sumaDiagonalInversa = sumarDiagonalInversa(matriz);
                    console.log("la suma de los elementos de la diagonal inversa es: " + sumaDiagonalInversa);
                }
                break;
            case 6:
                if (matriz == undefined) {
                    alert(" debe completar  opcion N1")
                } else {
                    let sumaMedia = calcularMedia(matriz);
                    console.log("La media de los elementos de la matriz es: " + sumaMedia);
                }
                 break;
            case 0:
                console.log("saliendo");
                break;
            default:
                console.log("opción no válida");
                break;
            } 
        }while (opcion !== 0);
    
}
menu();
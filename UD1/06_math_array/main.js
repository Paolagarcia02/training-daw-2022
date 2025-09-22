// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos



// La mediana del array
// La moda del array


const sumaDeTodosLosElementos = (arr) => {
    return arr.reduce((acc, curr) => acc += curr, 0);
}

const numeroMasGrande = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const numeroMasPequeno = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    return min;
    }
}

const mediaDeElementos = (arr) => {
    return sumaDeTodosLosElementos(arr) / arr.length;
}

function doCalculation(array) {
    console.log("suma de los elementos: " + sumaDeTodosLosElementos(array));
    console.log("numero mas grande: " + numeroMasGrande(array));
    console.log("numero mas pequeno: " + numeroMasPequeno(array));
    console.log("media de elementso: " + mediaDeElementos(array));
}



doCalculation([1,2,3,4])
doCalculation([5,5,5,5])
doCalculation([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5])
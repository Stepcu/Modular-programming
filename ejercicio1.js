

//Ejercicio 1
const suma = (num1, num2) => {
num1 = parseInt(prompt("Digite el primer numero:"));
num2 = parseInt(prompt("Digite el segundo numero:"));
if (num1 > num2) {
    alert("Este es el numero mayor: " + num1);
} else {
    alert("Este es el numero mayor: " +num2);
}
}


//Ejercicio 2
const letras = (contconsonantes, contvocales, letra) => {
letra = prompt("Digite una letra:");
contconsonantes = 0;
contvocales = 0;
if ((letra == "a") || (letra == "e") || (letra == "i") || (letra == "o") || (letra == "u")) {
    contvocales++;
    alert("La letra anterior("+ letra + ") es una vocal");
} else {
    contconsonantes++; 
    alert("La letra anterior (" + letra + ") es una consonante");
}
}


//Ejercicio 3
let letra = new Array(20), l = 0, contvocales = 0, contconsonantes = 0;
const arrayVocales = () => {
    for (l = 0; l <= 19; l++) {
        letra[l] = prompt("Escriba una letra:");
        condicional();
    }
    resultado();
}

const condicional = () => {
    if ((letra[l] == "a") || (letra[l] == "e") || (letra[l] == "i") || (letra[l] == "o") || (letra[l] == "u")) {
        contvocales++;
    } else {
        contconsonantes++;
    }
}
const resultado = () => {
    alert(`El resultado de ${letra} es: \n Vocales: ${contvocales} \n Consonantes: ${contconsonantes}`);
}


//Ejercicio 4
let num = new Array(10), numBuscado = 0, n = 0;
const numeros = () => {
    for (n = 0; n < num.length; n++) {
        num[n] = parseInt(prompt("Escriba un numero: "));
    }
    alert("El arreglo original es " + num);
    buscar();
    final();
}

const buscar = () => {
    numBuscado= parseInt(prompt("Digite el numero a buscar:"));
for(n = 0; n < num.length; n++) {
    if(numBuscado == num[n]) {
        num[n] *= 2;
        }
    }
}
const final = () => {
    alert("El arreglo nuevo es: " + num);
}


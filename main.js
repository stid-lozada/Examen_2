//Escribe una función que reciba un parámetro y lo imprima en consola.

function pointone(nombre) {
     console.log(nombre)
}
pointone("Stid Lozada Bedoya")

//Escribe una función que reciba dos parámetros, los sume e imprima en consola el resultado de la operación.

function point2(value1, value2) {
     if (typeof value1 !== 'number' || typeof value2 !== 'number' || value1 == null || value2 == null) {
          console.log("Imposible Realizar La Operacion")
     } else {
          console.log("Adicción:" + (Number(value1) + Number(value2)));
     }
}
point2(0, 0)

//Escribe una función que reciba dos parámetros, los reste e imprima en consola el resultado de la operación.

function point3(value1, value2) {
     if (typeof value1 !== 'number' || typeof value2 !== 'number' || value1 == null || value2 == null) {
          console.log("Imposible Realizar La Operacion")
     } else {
          console.log("Sustraccion:" + (Number(value1) - Number(value2)));
     }
}
point3(10, 35)

//Escribe una función que reciba dos parámetros, los multiplique e imprima en consola el resultado de la operación.

function point4(value1, value2) {
     if (typeof value1 !== 'number' || typeof value2 !== 'number' || value1 == null || value2 == null) {
          console.log("Imposible Realizar La Operacion")
     } else {
          console.log("Multiplicacion:" + (Number(value1) * Number(value2)));
     }
}
point4(10, 35)

//Escribe una función que reciba dos parámetros, los divida e imprima en consola el resultado de la operación. 

function point5(value1, value2) {
     if (typeof value1 !== 'number' || typeof value2 !== 'number' || value1 == null || value2 == null) {
          console.log("Imposible Realizar La Operacion")
     } else {
          console.log("Division:" + (Number(value1) / Number(value2)).toFixed(2));
     }
}
point5(50, 35)

//Escribe una función que reciba el radio de un círculo como parámetro, calcule el área del círculo e imprima en consola.

function point6(radio) {
     if (radio == null || typeof radio !== 'number') {
          console.log("Error")
     } else {
          let areacir = (Math.PI * Math.pow(radio, 2)).toFixed(2)
          console.log("Area:" + areacir)
     }
}
point6(2)

//Escribe una función que reciba como parámetro un valor en metros e imprima en consola su equivalente en kilómetros, con máximo dos decimales.
var km = 1000

function point7(valor) {
     if (valor == null || typeof valor !== 'number') {
          console.log("Error")
     } else {
          console.log("El valor " + valor + " es equivalente a " + (valor / km).toFixed(2) + " km")
     }
}
point7(258525630)

//Escribe una función que reciba como parámetro un valor en grados Celsius e imprima en consola su equivalente en grados Farenheit, con máximo dos decimales.

function point8(gcelsius) {
     if (gcelsius == null || typeof gcelsius !== 'number') {
          console.log("Error")
     } else {
          let gfarenheit = ((gcelsius * 9 / 5) + 32).toFixed(2)
          console.log(gcelsius + " celsius convertido en grados farenheit tiene un valor de " + gfarenheit + "°F")
     }
}
point8(90)

//Escribe una función que reciba las siguientes listas de números como parámetro y encuentre el valor más alto y más bajo en la lista. Lista1 = [10,4,2,20,5] Lista2=[0,0,0,1,0] Lista3=[-13,10,9,8,0,2000,-1]

function point9(lista) {
     var menor = 0;
     var mayor = 999999;
     for (var index = 0; index < lista.length; index++) {

          if (lista[index] >= menor) {
               menor = lista[index];
          } else if (lista[index] <= mayor) {
               mayor = lista[index];
          }
     }
     console.log("Valor menor: " + mayor + " Valor mayor: " + menor)
}

const list1 = [10, 4, 2, 20, 5];
const list2 = [0, 0, 0, 1, 0];
const list3 = [-13, 10, 9, 8, 0, 2000, -1]
point9(list1);
point9(list2);
point9(list3);

//Escribe una función que reciba dos parámetros con los que se calculará el valor exponencial de una base. El primer parámetro será la base y el segundo será el exponente. Imprimir el resultado del valor exponencial de la base en consola.

function Point10(base, exponente) {
     console.log("El valor exponencial es  " + Math.pow(base, exponente))
}
Point10(5, 3);

//Escribe una función que reciba un número como parámetro. Este número será la cantidad de veces que se debe solicitar, con la función prompt, que el usuario ingrese el nombre de un país diferente. Después de que el usuario ingrese el nombre de los países, el sistema debe mostrar un mensaje en pantalla indicando el nombre del país y cuántas letras tiene el nombre del país.

function pont11() {
     let repeat = prompt("ingrese la cantidad de veces");

     if (repeat == null || repeat == "" || !Number.isInteger(Number(repeat))) {
          alert("Ingrese información valida");
     } else {

          let paises = [];
          for (let index = 0; index < repeat; index++) {
               let pais = prompt("Ingrese el nombre del país");
               if (pais == null || pais == "") {
                    alert("Ingrese información valida");

               } else {
                    paises[index] = pais;
               }
          }

          for (let index = 0; index < paises.length; index++) {

               alert("La palabra: " + paises[index] + " tiene " + paises[index].length + " letras")

          }
     }

}
pont11()
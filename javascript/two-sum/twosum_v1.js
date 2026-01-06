/* 
Dado un arreglo de enteros nums y un entero target, devolvé los índices de los dos números tales que su suma sea igual a target.

Podés asumir que cada entrada tendrá exactamente una única solución y que no se puede usar el mismo elemento dos veces.

Podés devolver la respuesta en cualquier orden.
*/


//Funcion para crear arrays de n elementos con un minimo y maximo
function randomArray(n, min, max) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    arr.push(random);
  }

  return arr;
}

//Algoritmo para hallar los indices
function twoSum(arr, target){

    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){

            if(arr[i] + arr[j] === target){
                let indices = [i,j];
                return indices;
            }

        }
    }

    return null;
}

const MIN = 2;
const MAX = 20;

//Array de 10 enteros, con minimo "2" y maximo "20"
let nums = randomArray(10,MIN,MAX);

//Elegir dos indiices distintos para asegurarse que el target existe como suma
let i = Math.floor(Math.random() * nums.length);
let j;

do {
    j = Math.floor(Math.random() * nums.length);    //Elige un valor de j random pero distinto del valor de i
} while (j === i);

const target = nums[i] + nums [j];  //Nos aseguramos que el target sea "posible"
//-----------------

let result = twoSum(nums, target);

console.log("Array:", nums);
console.log("Target:", target);
console.log("Índices reales:", i, j);   //Puede pasar que los indices iniciales no sean los primeros que halla el algoritmo
console.log("Resultado twoSum:", result);





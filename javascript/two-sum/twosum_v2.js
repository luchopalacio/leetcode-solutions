//Algoritmo de twosum optimizado
function twoSum(arr, target) {
    const map = new Map();  //valor -> indice

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];

        // comprobar si existe el complemmento
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        // almacenar el valor actual con su respectivo indice
        map.set(arr[i], i);
    }

    return null; 
}

// prueba 
const nums = [7, 3, 1, 9, 5, 4];
const target = 5;

console.log(twoSum(nums, target)); //[2, 5]
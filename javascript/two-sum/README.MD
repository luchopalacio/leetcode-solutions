# TwoSum JavaScript

## Descripción
Dado un array de enteros y un valor target, se buscan dos índices
cuyos valores sumen exactamente el target.

## Version 1
Se utiliza un enfoque de fuerza bruta con dos bucles anidados,
evaluando todos los pares posibles sin repetir elementos.

### Complejidad
- Tiempo: O(n²)
- Espacio: O(1)

## Version 2
Versión optimizada utilizando Map para almacenar los valores ya vistos
y sus índices, permitiendo encontrar el complemento en tiempo constante.

### Complejidad
- Tiempo: O(n)
- Espacio: O(n)
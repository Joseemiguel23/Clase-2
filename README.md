# Clase-2
Ejercicio clase 2
¿Qué es el tercer parámetro recibido?
El tercer parámetro, callback, es una función que se pasa como argumento a la función suma.

¿En qué casos es obligatorio desarrollar este tipo de funciones?
Las funciones de devolución de llamada (callbacks) son comunes en JavaScript y se utilizan en diversas situaciones, como:
Operaciones asincrónicas, Eventos, Modularidad

Llamado a la funcion de ejemplo:

function miCallback(resultado) {
    console.log("El resultado de la suma es: " + resultado);
}

function suma(a, b, callback) {
    let c = a + b;
    callback(c);
}

suma(3, 5, miCallback);

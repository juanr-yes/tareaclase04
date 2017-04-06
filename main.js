/**
 * TAREA
 * Enviar a traves de slack a Nicolas Schurmann
 * 
 * Escribir un arreglo que contenga todos los meses del año. Pedirle al usuario que ingrese el mes de su cumpleaños. Se tienen que imprimir todos los meses que es su NO cumpleaños
 * 
 * IMPORTANTE: Se debe utilizar FOR e IF
 */

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

var userMonth = prompt("Hola, usuario. Cual es el mes de tu cumpleaños?")

for (var i = 0; i < months.length; i++) {
   if (months[i] != userMonth) {
      console.log(months[i])
   }
}
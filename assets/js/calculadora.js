//PEDES IN TERRA AD SIDERA VISUS
function calcularPlanes(  genero,                 // [string] ('masculino', 'femenino')
edad,                   // [number]
altura,                 // [number] (en centimetros)
peso,                   // [number] (en kilos)
nivelDeActividad,       // [string] ('sedentario', 'ligero', 'activo', 'muyActivo')
intensidadAlEjercitar,  // [string] ('ninguna', 'ligero', 'moderado', 'dificil', 'intenso')
ejercitarDiasPorSemana, // [number]
ejercitarMinutosPorDia  // [number]
) {
  console.log(  genero,                 // [string] ('masculino', 'femenino')
                            edad,                   // [number]
                            altura,                 // [number] (en centimetros)
                            peso,                   // [number] (en kilos)
                            nivelDeActividad,       // [string] ('sedentario', 'ligero', 'activo', 'muyActivo')
                            intensidadAlEjercitar,  // [string] ('ninguna', 'ligero', 'moderado', 'dificil', 'intenso')
                            ejercitarDiasPorSemana, // [number]
                            ejercitarMinutosPorDia  // [number]
                            )
var parametroNivelDeActividad = 1.25;
switch(nivelDeActividad) {
case 'sedentario':
parametroNivelDeActividad = 1.15;
break;
case 'ligero':
parametroNivelDeActividad = 1.25;
break;
case 'activo':
parametroNivelDeActividad = 1.35;
break;
case 'muyActivo':
parametroNivelDeActividad = 1.4;
break;
}

var parametroIntensidadAlEjercitar = 7.5;
switch(intensidadAlEjercitar) {
case 'ninguna':
parametroIntensidadAlEjercitar = 3;
break;
case 'ligero':
parametroIntensidadAlEjercitar = 5;
break;
case 'moderado':
parametroIntensidadAlEjercitar = 7.5;
break;
case 'dificil':
parametroIntensidadAlEjercitar = 10;
break;
case 'intenso':
parametroIntensidadAlEjercitar = 12;
break;
}

//BMR = Tasa metabolica basal
var BMR = genero == "masculino"  
? 5 + (10 * peso) + (6.25 * altura) - (5 * edad)
: -161 + (10 * peso) + (6.25 * altura) - (5 * edad);

var redondeadoBMR = Math.round(BMR);
var calculoActividadDiaria = parametroNivelDeActividad * redondeadoBMR;
var promedioCaloriasDiarias = (ejercitarDiasPorSemana * ejercitarMinutosPorDia * parametroIntensidadAlEjercitar) / 7;

var TDEE = Math.round(promedioCaloriasDiarias + calculoActividadDiaria); //TDEE = Gasto energetico diario


let r = {
DEE: TDEE,
Planes: [
parseInt((TDEE * 0.85)/100) * 100,
Math.round((TDEE * 1.1)/100) * 100
]
}

console.log("TDEE", r.DEE)
console.log("planes 0", r.Planes[0])
console.log("planes 1", r.Planes[1])

let tdeeResult = document.getElementById('tdeeResult');
let bajarResult = document.getElementById('bajarResult');
let aumentarResult = document.getElementById('aumentarResult');

tdeeResult.textContent = r.DEE + " Calorias"
bajarResult.textContent = r.Planes[0] + " Calorias"
aumentarResult.textContent = r.Planes[1] + " Calorias"

} //calcularPlanes()

function getFormValues(){
let edad = document.getElementById('edad').value;
let peso = document.getElementById('peso').value;
let altura = document.getElementById('altura').value;
let genero = document.getElementById('genero').value;
let nivelDeActividad = document.getElementById('nivelDeActividad').value;
let intensidadAlEjercitar = parseInt(document.getElementById('intensidadAlEjercitar').value);
let ejercitarDiasPorSemana  = document.getElementById('ejercitarDiasPorSemana').value;
let ejercitarMinutosPorDia = document.getElementById('ejercitarMinutosPorDia').value;

calcularPlanes(  genero,                 // [string] ('masculino', 'femenino')
 edad,                   // [number]
 altura,                 // [number] (en centimetros)
 peso,                   // [number] (en kilos)
 nivelDeActividad,
 intensidadAlEjercitar,
 ejercitarDiasPorSemana,
 ejercitarMinutosPorDia
 )

}


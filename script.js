/* 01. */

function calculateDogAge(idade){
    anos = idade * 7;
    console.log("O seu cao e " + anos + " anos de idade em anos de cao!");
}

calculateDogAge(2);
calculateDogAge(5);
calculateDogAge(8);

/* 02. */

function tellFortune(filhos, parceiro, loc, prof){
    console.log("Voce sera um " + prof + " em " + loc + " e casado com " + parceiro + " com " + filhos + " criancas");
}

tellFortune("filho1", "parceiro1", "loc1", "prof1");
tellFortune("filho2", "parceiro2", "loc2", "prof2");
tellFortune("filho3", "parceiro3", "loc3", "prof3");

/* 03. */

var c = 30;
var fahrenheit = function celsiusToFahrenheit(c){
    return (c * (9/5) + 32);
}

console.log (c + "°C é " + fahrenheit(c) + "°F");


var f = 86;
var celsius = function fahrenheitToCelsius(f){
    return ((f - 32) * (5/9));
}

console.log (f + "°F é " + celsius(f) + "°C");
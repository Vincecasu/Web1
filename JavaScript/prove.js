function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



/*
console.log("Ciao");

const prompt = require("prompt-sync")();

var str = prompt("Enter a string: ");

console.log("Hai inserito prima " + str);

str = capitalizeFirstLetter(str)

console.log("Hai inserito dopo " + str);

*/

//Inserisci primo numero e salvi su primo numero
function VerificaNumero(sNum)
{
    for(i=0;i<sNum.length;i++)
    {
            if((sNum.charAt(i)< '0') || (sNum.charAt(i)>'9'))
                return false;

    }
        return true;

}

function parseIntMy(sNum)
{
    bEsito = VerificaNumero(sNum);
    if(bEsito==true)
        return parseInt(sNum);
    var sNum1 = "0";
    for(a=0;a<3;a++)
    {
        sNum1 = prompt("Attenzione, numero errato, riprova ");
        bEsito = VerificaNumero(sNum1);
        if(bEsito==true)
            return parseInt(sNum1); 
    }

    return null;
}

const prompt = require('prompt-sync')();
var sPrimoNum = prompt("Inserisci primo numero ");
var iNum = parseIntMy(sPrimoNum);
if(iNum != null)
    console.log("Hai inserito" + iNum);
else
    console.log("Non sei riuscito ad inserire un numero");

process.exit(0);





//const prompt = require("prompt-sync")();

//var sPrimoNum = prompt("Inserisci primo numero: ");
var iPrimoNum = parseInt(sPrimoNum);

//Inserisci secondo numero
var sSecondoNum = prompt ("Inserisci secondo numero: ");
var iSecondoNum = parseInt(sSecondoNum);

//Fai la somma

var sSomma = iPrimoNum + iSecondoNum
//Stampi a schermo la somma
console.log("La somma vale " + sSomma);




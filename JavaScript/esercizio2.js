/*
var A;
var B;
A = 3;
B = "buongiorno a tutti";
console.log("Il tipo della var A e' " + typeof(A) + "\n");
console.log("Il tipo della var B e' " + typeof (B) + "\n");
*/

// Crea una variabile e copiaci dentro un numero.
// Stampa il tipo della variabile
//Nella stessa variabile copiaci dentro una stringa
//Stampa il tipo della variabile
/*
var A;
A = 3;
console.log("Il tipo della var A e' " + typeof(A) + "\n");
A = "Ciao mondo!"
console.log(typeof(A));
*/

var iPosizione;
var sMiaStringa;
sMiaStringa = "paperino"
iPosizione = sMiaStringa.indexOf("z");
if((iPosizione == -1) || (iPosizione > 3))
						console.log("La z non c'e' nei primi 4 caratteri")
else
	console.log("La z c'e' nei primi 4 caratteri");

var iPosizione;
var sMiaStringa;
sMiaStringa = "zecca"
iPosizione = sMiaStringa.indexOf("z");
if((iPosizione == -1) || (iPosizione > 3))
                        console.log("La z non c'e' nei primi 4 caratteri")
else
    console.log("La z c'e' nei primi 4 caratteri");


var iPosizione;
var sMiaStringa;
sMiaStringa = "carcalla"
iPosizione = sMiaStringa.indexOf("f");
if ((iPosizione >=0 ))
    console.log("La f e' nella stringa")
else
    console.log("La f non e' nella stringa");



    
function TerminaConLettera(sStringa ,sTermine)
{
    len = sStringa.length;
    iPosizione = sStringa.indexOf(sTermine,len -1)
    if (iPosizione >= 0)
        return 1
    else
        return 0
    
}
bRet = TerminaConLettera("Paperino","u")
if (bRet == 1)
    console.log("Paperino" + " termina con " + "u")
else
console.log("Paperino" + " non termina con " + "u" )
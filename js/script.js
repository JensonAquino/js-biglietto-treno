const prezzoAlKm = 0.21;
const percentMinorenni = 20;
const percentOver65 = 40;

const anniUtente = prompt("Quanti anni hai?")
const kmUtente = prompt("Quanti km vuoi percorrere?")
console.log(anniUtente, kmUtente)

const anniUtenteNum = parseInt(anniUtente)
const kmUtenteNum = parseInt(kmUtente)
console.log(anniUtenteNum, kmUtenteNum)

const prezzo = anniUtenteNum * kmUtenteNum

let sconto;
if (anniUtente < 18){
    sconto = percentMinorenni
}
else if (anniUtente >= 65){
    sconto = percentOver65
}
else{
    sconto = 0
}

const prezzoFinale = prezzo - (prezzo / 100 * sconto)


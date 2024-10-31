Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Ricordatevi un metodo che abbiamo visto durante le lezioni precedenti.
:avviso: Prima di scrivere il codice impostate il ragionamento nel file README.md!
Bonus:
Applicare de controlli sull'input dell'utente

DATI
1. Prezzo biglietto = 0.21 per Km
2. sconto minorenni e del 20%
3. soconto over 65 40%
4. prezzo finale con max 2 decimali

SVOLGIMENTO
1. dopo aver ricevuto limput del utente trasfmarlo in una var number
2. calcolare il prezzo di base
3. creo la varibbile per lo sconto minorenni e over 65
4. faccio in if + if else + else

if eta < 18
sconto da applicare = sconto minorenni
prezzo finale = prezzo base - sconto da apllicare

if else eta >= 65
sconto da applicare = sconto over 65
prezzo finale = prezzo base - sconto da apllicare

else
scont da apllicare = 0
prezzo finale = prezzo base - sconto da apllicare




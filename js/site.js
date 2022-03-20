
// Start Funktion
function programmStart(){
    
    let summe = document.getElementById("summeEingabe").value;
    let monate = document.getElementById("monateEingabe").value;
    let zinsen = document.getElementById("zinsenEingabe").value;

    // Ausgabe Kapitalsumme
    document.getElementById("kapitalSummeAusgabe").innerHTML = summe;

    // Ausgabe monatliche Kosten
    document.getElementById("monatlicheKosten").innerHTML = monatlicheKostenBerechnung(summe, monate, zinsen);

    // Ausgabe Zinsen Total

    // Ausgabe Kosten Total
 

    // Berechnung und Ausgabe Table
    displayTable(summe, monate, zinsen, monatlicheKosten);  
}


// Berechnung für die monatlichen Kosten
function monatlicheKostenBerechnung(summe, monate, zinsen){
    let monatlicheKosten = summe * (zinsen / 1200) / (1 - Math.pow((1 + zinsen / 1200), -monate));

    return monatlicheKosten;
}


// Ausgabe Table
function displayTable(summe, monate, zinsen){
    
    let monatlicheKosten = monatlicheKostenBerechnung(summe, monate, zinsen).toFixed(2);
    let kapitalRückzahlung = monatlicheKosten;
    let zinsenRückzahlung = summe * zinsen / 1200;
    let totalZinsen = 0;
    
    let tableRow = "";
    let monateSpalte = "";
    let montalicheZahlungenSpalte = "<td>" + monatlicheKosten + "</td>";
    let kapitalRückzahlungSpalte = "";
    let zinsenRückzahlungSpalte = "";
    let totalZinsenSpalte = "";
    let summeSpalte = "";
    
    for (let index = 1; index <= monate; index++) {

        zinsenRückzahlung = (summe * zinsen / 1200).toFixed(2);
        kapitalRückzahlung = (monatlicheKosten - zinsenRückzahlung).toFixed(2);
        summe = (summe - kapitalRückzahlung).toFixed(2);
        totalZinsen = totalZinsen + parseFloat(zinsenRückzahlung);
        monateSpalte = "<td>" + index + "</td>";
        kapitalRückzahlungSpalte = "<td>" + kapitalRückzahlung + "</td>";
        zinsenRückzahlungSpalte = "<td>" + zinsenRückzahlung + "</td>";
        totalZinsenSpalte = "<td>" + totalZinsen + "</td>";
        summeSpalte = "<td>" + summe + "</td>";
        
        tableRow += "<tr>" + monateSpalte + montalicheZahlungenSpalte + kapitalRückzahlungSpalte + zinsenRückzahlungSpalte + totalZinsenSpalte + summeSpalte + "</tr>";
        document.getElementById("tableAusgabe").innerHTML = tableRow;
        
    }
}


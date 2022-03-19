
function programmStart(){
    
    let summe = document.getElementById("summeEingabe").value;
    let monate = document.getElementById("monateEingabe").value;
    let zinsen = document.getElementById("zinsenEingabe").value;

    // Ausgabe Kapitalsumme
    document.getElementById("kapitalSummeAusgabe").innerHTML = summe + ",-- Euro";

    // Berechnung und Ausgabe monatliche Kosten
    monatlicheKosten = summe * (zinsen / 1200) / (1 - Math.pow((1 + zinsen / 1200), -monate));
    document.getElementById("monatlicheKosten").innerHTML = Math.round(monatlicheKosten) + ",-- Euro";

    // Berechnung und Ausgabe Total Zinsen
    totalZinsen = (summe * zinsen/1200);
    document.getElementById("zinsenAusgabe").innerHTML = totalZinsen + ",-- Euro";
    
}




function display(){
    
}


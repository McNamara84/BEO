if(typeof jQuery == "undefined") {
    alert("jQuery konnte nicht gefunden werden!");
}
// Variablen
var spielerName = "";
var attPoints = 1;
var niveau = 1;
var fertPoints = 0;
// Char-Attribute
var staerke;
var geschicklichkeit;
var robustheit;
var willenskraft;
var wahrnehmung;
var intelligenz;
var auftreten;
// Fertigkeiten
var athletik;
var beruf;
var bildung;
var diebeskunst;
var fahren;
var fernkampf;
var feuerwaffen;
var handeln;
var heiler;
var heimlichkeit;
var intuition;
var kunde;
var nahkampf;
var pilot;
var reiten;
var sprachen;
var techniker;
var unterhalten;
var ueberleben;
var wissenschaftler;
var neuerSpieler = true;

// Funktionen
// JQuery
// Changelog
$( function() {
    $( "#changelog" ).dialog({
        closeText: "Schließen",
        autoOpen: false,
        show: {
            effect: "size",
            duration: 1000
        },
        hide: {
            effect: "size",
            duration: 1000
        }
    });
 
    $( "#changelogButton" ).on( "click", function() {
        $( "#changelog" ).dialog( "open" );
    });
} );
// Erklärungen der Attribute mittels Mouseover (title wird angezeigt)
//$( function() {
//    $( document ).tooltip();
//} );

//Normales JavaScript

// Fertigkeiten +/-
// Athletik
document.getElementById("athletikPlus").onclick = function() {
    if (fertPoints > 0) {
        athletik++;
        document.getElementById("athletikAnzeige").innerHTML = athletik;
        fertPoints--;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
document.getElementById("athletikMinus").onclick = function() {
    if (athletik > 0) {
        athletik--;
        document.getElementById("athletikAnzeige").innerHTML = athletik;
        fertPoints++;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
// Beruf
document.getElementById("berufPlus").onclick = function() {
    if (fertPoints > 0) {
        beruf++;
        document.getElementById("berufAnzeige").innerHTML = beruf;
        fertPoints--;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
document.getElementById("berufMinus").onclick = function() {
    if (beruf > 0) {
        beruf--;
        document.getElementById("berufAnzeige").innerHTML = beruf;
        fertPoints++;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
// Bildung
document.getElementById("bildungPlus").onclick = function() {
    if (fertPoints > 0) {
        bildung++;
        document.getElementById("bildungAnzeige").innerHTML = bildung;
        fertPoints--;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
document.getElementById("bildungMinus").onclick = function() {
    if (bildung > 0) {
        bildung--;
        document.getElementById("bildungAnzeige").innerHTML = bildung;
        fertPoints++;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
// Diebeskunst
document.getElementById("diebeskunstPlus").onclick = function() {
    if (fertPoints > 0) {
        diebeskunst++;
        document.getElementById("diebeskunstAnzeige").innerHTML = diebeskunst;
        fertPoints--;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
document.getElementById("diebeskunstMinus").onclick = function() {
    if (diebeskunst > 0) {
        diebeskunst--;
        document.getElementById("diebeskunstAnzeige").innerHTML = diebeskunst;
        fertPoints++;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
// Fahren
document.getElementById("fahrenPlus").onclick = function() {
    if (fertPoints > 0) {
        fahren++;
        document.getElementById("fahrenAnzeige").innerHTML = fahren;
        fertPoints--;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
document.getElementById("fahrenMinus").onclick = function() {
    if (fahren > 0) {
        fahren--;
        document.getElementById("fahrenAnzeige").innerHTML = fahren;
        fertPoints++;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
// Fernkampf
document.getElementById("fernkampfPlus").onclick = function() {
    if (fertPoints > 0) {
        fernkampf++;
        document.getElementById("fernkampfAnzeige").innerHTML = fernkampf;
        fertPoints--;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
document.getElementById("fernkampfMinus").onclick = function() {
    if (fernkampf > 0) {
        fernkampf--;
        document.getElementById("fernkampfAnzeige").innerHTML = fernkampf;
        fertPoints++;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
// Feuerwaffen
document.getElementById("feuerwaffenPlus").onclick = function() {
    if (fertPoints > 0) {
        feuerwaffen++;
        document.getElementById("feuerwaffenAnzeige").innerHTML = feuerwaffen;
        fertPoints--;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
document.getElementById("feuerwaffenMinus").onclick = function() {
    if (feuerwaffen > 0) {
        feuerwaffen--;
        document.getElementById("feuerwaffenAnzeige").innerHTML = feuerwaffen;
        fertPoints++;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
// Handeln
document.getElementById("handelnPlus").onclick = function() {
    if (fertPoints > 0) {
        handeln++;
        document.getElementById("handelnAnzeige").innerHTML = handeln;
        fertPoints--;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
document.getElementById("handelnMinus").onclick = function() {
    if (handeln > 0) {
        handeln--;
        document.getElementById("handelnAnzeige").innerHTML = handeln;
        fertPoints++;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
// Heiler
document.getElementById("heilerPlus").onclick = function() {
    if (fertPoints > 0) {
        heiler++;
        document.getElementById("heilerAnzeige").innerHTML = heiler;
        fertPoints--;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
document.getElementById("heilerMinus").onclick = function() {
    if (heiler > 0) {
        heiler--;
        document.getElementById("heilerAnzeige").innerHTML = heiler;
        fertPoints++;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
// Heimlichkeit
document.getElementById("heimlichkeitPlus").onclick = function() {
    if (fertPoints > 0) {
        heimlichkeit++;
        document.getElementById("heimlichkeitAnzeige").innerHTML = heimlichkeit;
        fertPoints--;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
document.getElementById("heimlichkeitMinus").onclick = function() {
    if (heimlichkeit > 0) {
        heimlichkeit--;
        document.getElementById("heimlichkeitAnzeige").innerHTML = heimlichkeit;
        fertPoints++;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
// Intuition
document.getElementById("intuitionPlus").onclick = function() {
    if (fertPoints > 0) {
        intuition++;
        document.getElementById("intuitionAnzeige").innerHTML = intuition;
        fertPoints--;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
document.getElementById("intuitionMinus").onclick = function() {
    if (intuition > 0) {
        intuition--;
        document.getElementById("intuitionAnzeige").innerHTML = intuition;
        fertPoints++;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
// Kunde
document.getElementById("kundePlus").onclick = function() {
    if (fertPoints > 0) {
        kunde++;
        document.getElementById("kundeAnzeige").innerHTML = kunde;
        fertPoints--;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
document.getElementById("kundeMinus").onclick = function() {
    if (kunde > 0) {
        kunde--;
        document.getElementById("kundeAnzeige").innerHTML = kunde;
        fertPoints++;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
// Nahkampf
document.getElementById("nahkampfPlus").onclick = function() {
    if (fertPoints > 0) {
        nahkampf++;
        document.getElementById("nahkampfAnzeige").innerHTML = nahkampf;
        fertPoints--;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
document.getElementById("nahkampfMinus").onclick = function() {
    if (nahkampf > 0) {
        nahkampf--;
        document.getElementById("nahkampfAnzeige").innerHTML = nahkampf;
        fertPoints++;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
// Pilot
document.getElementById("pilotPlus").onclick = function() {
    if (fertPoints > 0) {
        pilot++;
        document.getElementById("pilotAnzeige").innerHTML = pilot;
        fertPoints--;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
document.getElementById("pilotMinus").onclick = function() {
    if (pilot > 0) {
        pilot--;
        document.getElementById("pilotAnzeige").innerHTML = pilot;
        fertPoints++;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
// Reiten
document.getElementById("reitenPlus").onclick = function() {
    if (fertPoints > 0) {
        reiten++;
        document.getElementById("reitenAnzeige").innerHTML = reiten;
        fertPoints--;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
document.getElementById("reitenMinus").onclick = function() {
    if (reiten > 0) {
        reiten--;
        document.getElementById("reitenAnzeige").innerHTML = reiten;
        fertPoints++;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
// Sprachen
document.getElementById("sprachenPlus").onclick = function() {
    if (fertPoints > 0) {
        sprachen++;
        document.getElementById("sprachenAnzeige").innerHTML = sprachen;
        fertPoints--;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
document.getElementById("sprachenMinus").onclick = function() {
    if (sprachen > 0) {
        sprachen--;
        document.getElementById("sprachenAnzeige").innerHTML = sprachen;
        fertPoints++;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
// Techniker
document.getElementById("technikerPlus").onclick = function() {
    if (fertPoints > 0) {
        techniker++;
        document.getElementById("technikerAnzeige").innerHTML = techniker;
        fertPoints--;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
document.getElementById("technikerMinus").onclick = function() {
    if (techniker > 0) {
        techniker--;
        document.getElementById("technikerAnzeige").innerHTML = techniker;
        fertPoints++;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
// Unterhalten
document.getElementById("unterhaltenPlus").onclick = function() {
    if (fertPoints > 0) {
        unterhalten++;
        document.getElementById("unterhaltenAnzeige").innerHTML = unterhalten;
        fertPoints--;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
document.getElementById("unterhaltenMinus").onclick = function() {
    if (unterhalten > 0) {
        unterhalten--;
        document.getElementById("unterhaltenAnzeige").innerHTML = unterhalten;
        fertPoints++;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
// Überleben
document.getElementById("ueberlebenPlus").onclick = function() {
    if (fertPoints > 0) {
        ueberleben++;
        document.getElementById("ueberlebenAnzeige").innerHTML = ueberleben;
        fertPoints--;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
document.getElementById("ueberlebenMinus").onclick = function() {
    if (ueberleben > 0) {
        ueberleben--;
        document.getElementById("ueberlebenAnzeige").innerHTML = ueberleben;
        fertPoints++;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
// Wissenschaftler
document.getElementById("wissenschaftlerPlus").onclick = function() {
    if (fertPoints > 0) {
        wissenschaftler++;
        document.getElementById("wissenschaftlerAnzeige").innerHTML = wissenschaftler;
        fertPoints--;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}
document.getElementById("wissenschaftlerMinus").onclick = function() {
    if (wissenschaftler > 0) {
        wissenschaftler--;
        document.getElementById("wissenschaftlerAnzeige").innerHTML = wissenschaftler;
        fertPoints++;
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
    }
}

// Ay-Enter
var input = document.getElementById("nameInput");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("ok").click();
    }
});
// Fertigkeiten berechnen
function fertBerechnen() {
    // Tabelle mit Fertigkeitspunkten sichtbar machen
    document.getElementById("tabFert").style.display = "block";
    // Athletik
    athletik = staerke + geschicklichkeit + robustheit;
    document.getElementById("athletikAnzeige").innerHTML = athletik;
    // Beruf
    beruf = geschicklichkeit + intelligenz + auftreten;
    document.getElementById("berufAnzeige").innerHTML = beruf;
    // Bildung
    bildung = intelligenz + wahrnehmung;
    document.getElementById("bildungAnzeige").innerHTML = bildung;
    // Diebeskunst
    diebeskunst = geschicklichkeit + wahrnehmung;
    document.getElementById("diebeskunstAnzeige").innerHTML = bildung;
    // Fahren
    fahren = geschicklichkeit + wahrnehmung;
    document.getElementById("fahrenAnzeige").innerHTML = bildung;
    // Fernkampf
    fernkampf = intelligenz + wahrnehmung;
    document.getElementById("fernkampfAnzeige").innerHTML = bildung;
    // Feuerwaffen
    feuerwaffen = intelligenz + wahrnehmung;
    document.getElementById("feuerwaffenAnzeige").innerHTML = bildung;
    // Handeln
    handeln = intelligenz + wahrnehmung;
    document.getElementById("handelnAnzeige").innerHTML = bildung;
    // Heiler
    heiler = intelligenz + wahrnehmung;
    document.getElementById("heilerAnzeige").innerHTML = bildung;
    // Heimlichkeit
    heimlichkeit = intelligenz + wahrnehmung;
    document.getElementById("heimlichkeitAnzeige").innerHTML = bildung;
    // Intuition
    intuition = intelligenz + wahrnehmung;
    document.getElementById("intuitionAnzeige").innerHTML = bildung;
    // Kunde
    kunde = intelligenz + wahrnehmung;
    document.getElementById("kundeAnzeige").innerHTML = bildung;
    // Nahkampf
    nahkampf = intelligenz + wahrnehmung;
    document.getElementById("nahkampfAnzeige").innerHTML = bildung;
    // Pilot
    pilot = intelligenz + wahrnehmung;
    document.getElementById("pilotAnzeige").innerHTML = bildung;
    // Reiten
    reiten = intelligenz + wahrnehmung;
    document.getElementById("reitenAnzeige").innerHTML = bildung;
    // Sprachen
    sprachen = intelligenz + wahrnehmung;
    document.getElementById("sprachenAnzeige").innerHTML = bildung;
    // Techniker
    techniker = intelligenz + wahrnehmung;
    document.getElementById("technikerAnzeige").innerHTML = bildung;
    // Unterhalten
    unterhalten = intelligenz + wahrnehmung;
    document.getElementById("unterhaltenAnzeige").innerHTML = bildung;
    // Überleben
    ueberleben = intelligenz + wahrnehmung;
    document.getElementById("ueberlebenAnzeige").innerHTML = bildung;
    // Wissenschaftler
    wissenschaftler = intelligenz + wahrnehmung;
    document.getElementById("wissenschaftlerAnzeige").innerHTML = bildung;
}
// Attribute speichern
document.getElementById("speichern").onclick = function() {
    if (attPoints == 0) {
        document.getElementById("speichern").style.display = "none";
        document.getElementById("attTable").style.display = "none";
        document.getElementById("verblAttPointsAnzeige").style.display = "none";
        document.getElementById("los").style.display = "block";
        if (niveau == 0) {
            fertPoints = 10;
        }
        else if (niveau == 1) {
            fertPoints = 15;
        }
        else if (niveau == 2) {
            fertPoints = 20;
        }
        else if (niveau == 3) {
            fertPoints = 40;
        }
        else if (niveau == 4) {
            fertPoints = 60;
        }
        document.getElementById("fertPointsAnzeige").innerHTML = fertPoints;
        document.getElementById("verblFertPointsAnzeige").style.display = "block";
        fertBerechnen();
    }
    else {
        alert("Fertigkeitspunkte sind noch nicht alle vergeben!");
    }
}

// rasseSwitch
function rasseSwitch() {
    var rasse = document.getElementById("rasse").value;
    if (rasse == "Barbar") {
        resetAttPoints(1);
    }
    else if (rasse == "Guul") {
        resetAttPoints(0);
        auftreten -= 1;
        document.getElementById("auftretenAnzeige").innerHTML = auftreten;
    }
}
// kulturSwitch
function kulturSwitch() {
    var kultur = document.getElementById("kultur").value;
}

// Alle Attribute auf 0 setzen und missingAttPoints zur Verteilung gutschreiben
function resetAttPoints(missingAttPoints) {
    staerke = 0;
    document.getElementById("staerkeAnzeige").innerHTML = staerke;
    geschicklichkeit = 0;
    document.getElementById("geschicklichkeitAnzeige").innerHTML = geschicklichkeit;
    robustheit = 0;
    document.getElementById("robustheitAnzeige").innerHTML = robustheit;
    willenskraft = 0;
    document.getElementById("willenskraftAnzeige").innerHTML = willenskraft;
    wahrnehmung = 0;
    document.getElementById("wahrnehmungAnzeige").innerHTML = wahrnehmung;
    intelligenz = 0;
    document.getElementById("intelligenzAnzeige").innerHTML = intelligenz;
    auftreten = 0;
    document.getElementById("auftretenAnzeige").innerHTML = auftreten;
    attPoints = missingAttPoints;
    attPointsRefresh();
}
// Refresh der verbleibenden attPoints
function attPointsRefresh() {
    document.getElementById("attPointsAnzeige").innerHTML = attPoints;
}
resetAttPoints(1);
attPointsRefresh();
// Stärke +/-
document.getElementById("staerkePlus").onclick = function() {
    if(attPoints > 0) {
    attPoints = attPoints - 1;
    staerke = staerke + 1;
    document.getElementById("staerkeAnzeige").innerHTML = staerke;
    attPointsRefresh();
    }
}
document.getElementById("staerkeMinus").onclick = function() {
    if(staerke > 0) {
    attPoints = attPoints + 1;
    staerke = staerke - 1;
    document.getElementById("staerkeAnzeige").innerHTML = staerke;
    attPointsRefresh();
    }
}
// Geschicklichkeit +/-
document.getElementById("geschicklichkeitPlus").onclick = function() {
    if(attPoints > 0) {
    attPoints = attPoints - 1;
    geschicklichkeit = geschicklichkeit + 1;
    document.getElementById("geschicklichkeitAnzeige").innerHTML = geschicklichkeit;
    attPointsRefresh();
    }
}
document.getElementById("geschicklichkeitMinus").onclick = function() {
    if(geschicklichkeit > 0) {
    attPoints = attPoints + 1;
    geschicklichkeit = geschicklichkeit - 1;
    document.getElementById("geschicklichkeitAnzeige").innerHTML = geschicklichkeit;
    attPointsRefresh();
    }
}
// Robustheit +/-
document.getElementById("robustheitPlus").onclick = function() {
    if(attPoints > 0) {
    attPoints = attPoints - 1;
    robustheit = robustheit + 1;
    document.getElementById("robustheitAnzeige").innerHTML = robustheit;
    attPointsRefresh();
    }
}
document.getElementById("robustheitMinus").onclick = function() {
    if(robustheit > 0) {
    attPoints = attPoints + 1;
    robustheit = robustheit - 1;
    document.getElementById("robustheitAnzeige").innerHTML = robustheit;
    attPointsRefresh();
    }
}
// Willenskraft +/-
document.getElementById("willenskraftPlus").onclick = function() {
    if(attPoints > 0) {
    attPoints = attPoints - 1;
    willenskraft = willenskraft + 1;
    document.getElementById("willenskraftAnzeige").innerHTML = willenskraft;
    attPointsRefresh();
    }
}
document.getElementById("willenskraftMinus").onclick = function() {
    if(willenskraft > 0) {
    attPoints = attPoints + 1;
    willenskraft = willenskraft - 1;
    document.getElementById("willenskraftAnzeige").innerHTML = willenskraft;
    attPointsRefresh();
    }
}
// Wahrnehmung +/-
document.getElementById("wahrnehmungPlus").onclick = function() {
    if(attPoints > 0) {
    attPoints = attPoints - 1;
    wahrnehmung = wahrnehmung + 1;
    document.getElementById("wahrnehmungAnzeige").innerHTML = wahrnehmung;
    attPointsRefresh();
    }
}
document.getElementById("wahrnehmungMinus").onclick = function() {
    if(wahrnehmung > 0) {
    attPoints = attPoints + 1;
    wahrnehmung = wahrnehmung - 1;
    document.getElementById("wahrnehmungAnzeige").innerHTML = wahrnehmung;
    attPointsRefresh();
    }
}
// Intelligenz +/-
document.getElementById("intelligenzPlus").onclick = function() {
    if(attPoints > 0) {
    attPoints = attPoints - 1;
    intelligenz = intelligenz + 1;
    document.getElementById("intelligenzAnzeige").innerHTML = intelligenz;
    attPointsRefresh();
    }
}
document.getElementById("intelligenzMinus").onclick = function() {
    if(intelligenz > 0) {
    attPoints = attPoints + 1;
    intelligenz = intelligenz - 1;
    document.getElementById("intelligenzAnzeige").innerHTML = intelligenz;
    attPointsRefresh();
    }
}
// Auftreten +/-
document.getElementById("auftretenPlus").onclick = function() {
    if(attPoints > 0) {
    attPoints = attPoints - 1;
    auftreten = auftreten + 1;
    document.getElementById("auftretenAnzeige").innerHTML = auftreten;
    attPointsRefresh();
    }
}
document.getElementById("auftretenMinus").onclick = function() {
    if(auftreten > 0) {
    attPoints = attPoints + 1;
    auftreten = auftreten - 1;
    document.getElementById("auftretenAnzeige").innerHTML = auftreten;
    attPointsRefresh();
    }
}
document.getElementById("ok").onclick = function() {
    spielerName = document.getElementById("nameInput").value;
    if (spielerName !== "" && spielerName !== " " && spielerName !== "   ") {
        document.getElementById("nameInput").style.display = "none";
        document.getElementById("ok").style.display = "none";
        document.getElementById("anzeigeText").innerHTML = "Tenk fa tuu, " + spielerName + "!";
        document.getElementById("hilfeText").style.display = "inline";
        document.getElementById("attTable").style.display = "inline";
        document.getElementById("speichern").style.display = "block";
        document.getElementById("verblAttPointsAnzeige").style.display = "block";
    }
}
// Los geht das Spiel! Alle Werte speichern (später mal in eine Datenbank) und neue Seite spiel.html laden
document.getElementById("los").onclick = function() {
    if (fertPoints == 0) {
        savePoints();
        window.location.href='spiel.html';
    } else {
        alert("Noch nicht alle Fertigkeitspunkte vergeben!");
    }
}
// Punkte laden
function savePoints() {
    localStorage['spielerName'] = spielerName;
    localStorage['rasse'] = rasse.value;
    localStorage['kultur'] = kultur.value;
    localStorage['staerke'] = staerke;
    localStorage['geschicklichkeit'] = geschicklichkeit;
    localStorage['willenskraft'] = willenskraft;
    localStorage['robustheit'] = robustheit;
    localStorage['wahrnehmung'] = wahrnehmung;
    localStorage['intelligenz'] = intelligenz;
    localStorage['auftreten'] = auftreten;
    localStorage['neuerSpieler'] = neuerSpieler;
}
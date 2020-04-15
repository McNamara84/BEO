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
// Funktionen

// Changelog
$( function() {
    $( "#changelog" ).dialog({
        closeText: "Schließen",
        autoOpen: false,
        show: {
            effect: "drop",
            duration: 1000
        },
        hide: {
            effect: "drop",
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
// Fertigkeiten berechnen
function fertBerechnen() {
    document.getElementById("tabFert").style.display = "block";
    athletik = staerke + geschicklichkeit + robustheit;
    document.getElementById("athletikAnzeige").innerHTML = athletik;
    beruf = geschicklichkeit + intelligenz + auftreten;
    document.getElementById("berufAnzeige").innerHTML = beruf;
}
// Attribute speichern
document.getElementById("speichern").onclick = function() {
    if (attPoints == 0) {
        document.getElementById("speichern").style.display = "none";
        document.getElementById("attTable").style.display = "none";
        document.getElementById("verblAttPointsAnzeige").style.display = "none";
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
}

// rasseSwitch
function rasseSwitch() {
    var rasse = document.getElementById("rasse").value;
    if (rasse == "barbar") {
        resetAttPoints(1);
    }
    else if (rasse == "guul") {
        resetAttPoints(0);
        auftreten -= 1;
        document.getElementById("auftretenAnzeige").innerHTML = auftreten;
    }
}
// kulturSwitch
var kultur = "barbar"
function kulturSwitch() {
    kultur = document.getElementById("kultur").value;
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
    document.getElementById("nameInput").style.display = "none";
    document.getElementById("ok").style.display = "none";
    document.getElementById("anzeigeText").innerHTML = "Tenk fa tuu, " + spielerName + "!";
    document.getElementById("hilfeText").style.display = "inline";
    document.getElementById("attTable").style.display = "inline";
    document.getElementById("speichern").style.display = "block";
    document.getElementById("verblAttPointsAnzeige").style.display = "block";
}
var aktHandlung;
var entscheidungA;
var entscheidungB;
var story = 0;

function wuerfeln() {
	return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}
function loadStory() {
    document.getElementById("handlung").innerHTML = aktHandlung;
    document.getElementById("entscheidungA").innerHTML = entscheidungA;
    document.getElementById("entscheidungB").innerHTML = entscheidungB;
}
function loadPoints() {
    var spielerName = localStorage['spielerName'];
    document.getElementById("spielerName").innerHTML = spielerName;
    var rasse = localStorage['rasse'];
    document.getElementById("SpielerRasse").innerHTML = rasse;
    var kultur = localStorage['kultur'];
    document.getElementById("spielerKultur").innerHTML = kultur;
    // Attributspunkte
    var staerke = localStorage['staerke'];
    document.getElementById("curStaerke").innerHTML = staerke;
    var geschicklichkeit = localStorage['geschicklichkeit'];
    document.getElementById("curGeschicklichkeit").innerHTML = geschicklichkeit;
    var robustheit = localStorage['robustheit'];
    document.getElementById("curRobustheit").innerHTML = robustheit;
    var willenskraft = localStorage['willenskraft'];
    document.getElementById("curWillenskraft").innerHTML = willenskraft;
    var wahrnehmung = localStorage['wahrnehmung'];
    document.getElementById("curWahrnehmung").innerHTML = wahrnehmung;
    var intelligenz = localStorage['intelligenz'];
    document.getElementById("curIntelligenz").innerHTML = intelligenz;
    var auftreten = localStorage['auftreten'];
    document.getElementById("curAuftreten").innerHTML = auftreten;
    // Storyvariablen
    var neuerSpieler = localStorage['neuerSpieler'];
}
// Changelog
$( function() {
    $( "#changelog" ).dialog({
        closeText: "Schließen",
        autoOpen: false,
        show: {
            effect: "size",
            duration: 750
        },
        hide: {
            effect: "size",
            duration: 750
        }
    });
 
    $( "#changelogButton" ).on( "click", function() {
        $( "#changelog" ).dialog( "open" );
    });
} );

loadPoints();
aktHandlung = "Vor euch öffnet sich der Wald in ein kleines Tal. Das Tal scheint die Ruinen einer uralten Siedlung zu beherbergen. Steinerne Relikte aus einem anderen Zeitalter ragen unter dichtem Bewuchs hervor. Insgesamt sind es wohl ein Dutzend Gebäude. Die meisten enden nach drei oder vier Stockwerken in Trümmern. Im Zentrum der Ruinen erhebt sich ein alter Turm fast 25 Meter hoch in die Luft. Alles ist von Schlingpflanzen überwuchert, und ihr könnt keine Bewegung erkennen. Trotzdem fühlt ihr euch beobachtet. Was willst du tun?";
entscheidungA = "In die Siedlung schleichen";
entscheidungB = "Dunkelheit abwarten";
loadStory();
document.getElementById("entscheidungA").onclick = function() {
    if (story == 0) {
        aktHandlung = "Du schleichst dich in die Siedlung.";
        document.getElementById("entscheidungA").style.display = "none";
        document.getElementById("entscheidungB").style.display = "none";
        document.getElementById("probe").style.display = "block";
        loadStory();
    }
}
document.getElementById("entscheidungB").onclick = function() {
    if (story == 0) {
        aktHandlung = "Du wartest die Dunkelheit ab.";
        document.getElementById("entscheidungA").style.display = "none";
        document.getElementById("entscheidungB").style.display = "none";
        loadStory();
    }
}
document.getElementById("wuerfeln").onclick = function () {
    document.getElementById("wuerfeln").style.display = "none";
    document.getElementById("ergebnis").style.display = "block";
    var w1 = wuerfeln();
    var w2 = wuerfeln();
    ergebnisProbe = w1 + w2;
    document.getElementById("ergebnis").innerHTML = "Du würfelst eine " + w1 + " und eine " + w2 + "<br>= " + ergebnisProbe + "<br> Dein Wert für Heimlichkeit ist xx<br>Die Probe ist damit verloren.";
}
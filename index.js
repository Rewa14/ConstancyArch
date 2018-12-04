//All
var adkins = 0;
var montfort = 0;
var swalwell = 0;
var kocurek = 0;
var macCallumStewart = 0;
var anthropy = 0;
var aranda = 0;
var flanagan = 0;
var ihde = 0;
var dAnastasio = 0;

var altChecker = 0;

function resetVal(){
    /*adkins = 0;
    localStorage.setItem("adVal", adkins);*/
    montfort = 0;
    localStorage.setItem("moVal", montfort);
    swalwell = 0;
    localStorage.setItem("swVal", swalwell);
    kocurek = 0;
    localStorage.setItem("koVal", kocurek);
    macCallumStewart = 0;
    localStorage.setItem("maVal", macCallumStewart);
    anthropy = 0;
    localStorage.setItem("anVal", anthropy);
    aranda = 0;
    localStorage.setItem("arVal", aranda);
    flanagan = 0;
    localStorage.setItem("flVal", flanagan);
    altChecker = 0;
    localStorage.setItem("altO", altChecker);
    ihde = 0;
    localStorage.setItem("ihVal", ihde);
    dAnastasio = 0;
    localStorage.setItem("daVal", dAnastasio);
}

function home() {
    window.location.href = 'index.html';
}

function start() {
    resetVal()
    adkins = 1;
    localStorage.setItem("adVal", adkins);
    window.location.href = '0.0welcome.html';
}

function leaveClass() {
    window.location.href = '1.0leaveClass.html';
}

function lieFinley() {
    montfort = 1;
    localStorage.setItem("moVal", montfort);
    swalwell = 0;
    localStorage.setItem("swVal", swalwell);
    window.location.href = '1.1lieFinley.html';
}

function truthFinley() {
    swalwell = 1;
    localStorage.setItem("swVal", swalwell);
    montfort = 0;
    localStorage.setItem("moVal", montfort);
    window.location.href = '1.2truthFinley.html';
}

function arcade() {
    window.location.href = '2.0arcade.html';
}

function redMachine() {
    kocurek = 1;
    localStorage.setItem("koVal", kocurek);
    macCallumStewart = 0;
    localStorage.setItem("maVal", macCallumStewart);
    window.location.href = '2.1redMachine.html';
}

function movieProjection() {
    kocurek = 0;
    localStorage.setItem("koVal", kocurek);
    macCallumStewart = 1;
    localStorage.setItem("maVal", macCallumStewart);
    window.location.href = '2.2movieProjection.html';
}

function officeBuilding() {
    window.location.href = '3.0officeBuilding.html';
}

function workspace() {
    anthropy = 1;
    localStorage.setItem("anVal", anthropy);
    flanagan = 0;
    localStorage.setItem("flVal", flanagan);
    ihde = 0;
    localStorage.setItem("ihVal", ihde);
    dAnastasio = 0;
    localStorage.setItem("daVal", dAnastasio);
    window.location.href = '3.10workspace.html';
}

function sideRoom() {
    aranda = 1;
    localStorage.setItem("arVal", aranda);
    window.location.href = '3.11sideRoom.html';
}

function argument() {
    flanagan = 1;
    localStorage.setItem("flVal", flanagan);
    anthropy = 0;
    localStorage.setItem("anVal", anthropy);
    aranda = 0;
    localStorage.setItem("arVal", aranda);
    dAnastasio = 0;
    localStorage.setItem("daVal", dAnastasio);
    window.location.href = '3.20argument.html';
}

function choice() {
    altChecker = 0;
    localStorage.setItem("altO", altChecker);
    ihde = 1;
    localStorage.setItem("ihVal", ihde);
    window.location.href = '3.21choice.html';
}

function choiceAlt() {
    altChecker = 1;
    localStorage.setItem("altO", altChecker);
    ihde = 1;
    localStorage.setItem("ihVal", ihde);
    window.location.href = '3.21choice.html';
}

function altExecute(){
    if(localStorage.getItem("altO") == 1) {
        var kai = document.getElementsByClassName("kaiS");
        for(var i = 0; i < kai.length; i++) {
            kai[i].style.color = "brown";
        }
        var wes = document.getElementsByClassName("wesS");
        for(var i = 0; i < wes.length; i++) {
            wes[i].style.color = "gray";
        }
    }
}

function quitting() {
    dAnastasio = 1;
    localStorage.setItem("daVal", dAnastasio);
    anthropy = 0;
    localStorage.setItem("anVal", anthropy);
    flanagan = 0;
    localStorage.setItem("flVal", flanagan);
    aranda = 0;
    localStorage.setItem("arVal", aranda);
    ihde = 0;
    localStorage.setItem("ihVal", ihde);
    window.location.href = '3.3quitting.html';
}

function outside() {
    window.location.href = '4.1outsideBuilding.html';
}

function hallway() {
    window.location.href = '4.2hallway.html';
}

function end() {
    window.location.href = '5.0end.html';
}

function aspectCopy() {
    window.location.href = 'aspectCopy.html';
}

function learned() {
    if(localStorage.getItem("adVal") == 1) {
        document.getElementById("ad").style.visibility = 'visible';
    } else {
        document.getElementById("ad").style.visibility = 'hidden';
    }
    if(localStorage.getItem("moVal") == 1) {
        document.getElementById("mo").style.visibility = 'visible';
    } else {
        document.getElementById("mo").style.visibility = 'hidden';
    }
    if(localStorage.getItem("swVal") == 1) {
        document.getElementById("sw").style.visibility = 'visible';
    } else {
        document.getElementById("sw").style.visibility = 'hidden';
    }
    if(localStorage.getItem("koVal") == 1) {
        document.getElementById("ko").style.visibility = 'visible';
    } else {
        document.getElementById("ko").style.visibility = 'hidden';
    }
    if(localStorage.getItem("maVal") == 1) {
        document.getElementById("ma").style.visibility = 'visible';
    } else {
        document.getElementById("ma").style.visibility = 'hidden';
    }
    if(localStorage.getItem("anVal") == 1) {
        document.getElementById("an").style.visibility = 'visible';
    } else {
        document.getElementById("an").style.visibility = 'hidden';
    }
    if(localStorage.getItem("arVal") == 1) {
        document.getElementById("ar").style.visibility = 'visible';
    } else {
        document.getElementById("ar").style.visibility = 'hidden';
    }
    if(localStorage.getItem("flVal") == 1) {
        document.getElementById("fl").style.visibility = 'visible';
    } else {
        document.getElementById("fl").style.visibility = 'hidden';
    }
    if(localStorage.getItem("ihVal") == 1) {
        document.getElementById("ih").style.visibility = 'visible';
    } else {
        document.getElementById("ih").style.visibility = 'hidden';
    }
    if(localStorage.getItem("daVal") == 1) {
        document.getElementById("da").style.visibility = 'visible';
    } else {
        document.getElementById("da").style.visibility = 'hidden';
    }
}

function reload() {
    var reload = confirm("Are you sure you want to start again?");
    if(reload == true) {
        home();
    }
}
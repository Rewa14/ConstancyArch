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
        var kW = 'Wes';
        document.getElementById("kaiWes").innerHTML = kW;
        var kai = document.getElementsByClassName("kaiS");
        for(var i = 0; i < kai.length; i++) {
            kai[i].style.color = "#8D38C9";
        }
        var wes = document.getElementsByClassName("wesS");
        for(var i = 0; i < wes.length; i++) {
            wes[i].style.color = "#00FFFF";
        }
    } else{
        var kW = 'Kai';
        document.getElementById("kaiWes").innerHTML = kW;
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

function learned2() {
    var tx1 = 'That game companies like Sierra online stopped making games because of the popularity of shooter games.';
    document.getElementById("tx1").innerHTML = tx1;
    var tx2;
    if(localStorage.getItem("moVal") == 1) {
        tx2 = 'Adventure games are a valuable form of media, providing worlds to map out and thought-provoking puzzles to solve.';
    } else if(localStorage.getItem("swVal") == 1){
        tx2 = 'Nostalgia needs to kept in check as it can cloud how games are remembered, sometimes exaggerating the praise it deserves.';
    } else{
        tx2 = '';
    }
    document.getElementById("tx2").innerHTML = tx2;
    var tx3;
    if(localStorage.getItem("koVal") == 1) {
        tx3 = 'There are game companies will cater to boys to sell their games even if it objectifies women.';
    } else if(localStorage.getItem("maVal") == 1){
        tx3 = 'Role-playing was seen as a girlish, childish activity, an idea that was popularized by Roger Caillois.';
    } else{
        tx3 = '';
    }
    document.getElementById("tx3").innerHTML = tx3;
    var tx4;
    if(localStorage.getItem("anVal") == 1) {
        tx4 = 'Games have been dominated by a single privileged perspective, which is terrifying because an art form should be open to everyone.';
    } else if(localStorage.getItem("flVal") == 1){
        tx4 = 'Including details in games is so important to include as with just a few pieces of information players are able to create a larger story for their actions.';
    } else if(localStorage.getItem("daVal") == 1){
        tx4 = 'Game companies need to foster better equality practices, as women are not seen as the valuable assets that they are in game creation.';
    } else{
        tx4 = '';
    }
    document.getElementById("tx4").innerHTML = tx4;
    var tx5;
    if(localStorage.getItem("arVal") == 1) {
        tx5 = 'Games are a form of art as they hold ideas about society and at the same time, they supersede art mediums as games can be created with other art forms.';
    } else if(localStorage.getItem("ihVal") == 1){
        tx5 = 'Games can provide valuable skills such as better hand-eye coordination which can translate into other fields with examples of players becoming better surgeons.';
    } else{
        tx5 = '';
    }
    document.getElementById("tx5").innerHTML = tx5;
}

n =  new Date();
document.getElementById("date").innerHTML = n.getFullYear();

function reflect() {
    window.open('https://docs.google.com/document/d/1MGOph50w1KFN5NEu96CAxFAv9EAxMMnPFaPv-y960Lw/edit?usp=sharing', '_blank');
}

function reload() {
    var reload = confirm("Are you sure you want to start again?");
    if(reload == true) {
        home();
    }
}


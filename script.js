/*
var header = document.getElementById("header");

header.addEventListener("click", refresh);
function refresh() {
    window.location.reload();
}
*/


function ilkElementiSil() {
    const visibleDOM = document.getElementById("visible");
    if (visibleDOM) {
        visibleDOM.remove();
    }
}

var hid = document.querySelector(".hidden");
hid.style.visibility = "hidden";

function ikinciyiGörünürYap() {
    var hid = document.querySelector(".hidden");
    hid.style.visibility = "visible";
}

var header = document.getElementById("header");

header.addEventListener("click", değiştir);
function değiştir() {
    ilkElementiSil();
    ikinciyiGörünürYap();
}


function show_hide(){
    var nav=document.getElementById("navbar");
    navigator.vibrate(100);
    if(nav.style.display=="block") {
        nav.style.display="none";
        document.getElementById("icon").innerHTML="&#9776"
    } else {
        nav.style.display="block";
        document.getElementById("icon").innerHTML="&#10006"
    }
}
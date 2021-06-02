function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
}


var i = 0;
function move() {
    if (i == 0) {
        i = 10;
        var elem = document.getElementById("myBar");    
        var width = 1;
        var id = setInterval(frame, 20);
        function frame() {
        if (width >= 80) {
            clearInterval(id);
            i = 0;
        } else {
            width++;
            elem.style.width = width + "%";
        }
        document.getElementById("number").innerHTML = width + "%";
        }
    }
}
function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg");
}

// const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

let height = screen.height+150;
function moveDown(){
    window.scroll({
        top: height,
        behavior: 'smooth'
    });
}


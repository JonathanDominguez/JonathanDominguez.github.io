const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
function moveDown(){
    window.scroll({
        top: vh,
        behavior: 'smooth'
    });
}

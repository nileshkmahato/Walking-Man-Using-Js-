var x = null;
var m = 0;
function start() {
    x = setInterval(anim, 100);
    function anim() {
        console.log(m);
        if (m == 1200) {
            clearInterval(x);
            m = 0;
        }
        else {
            m = m + 5;
            let img = document.getElementById("img");img.style.visibility = "visible";
            var target = document.getElementById("img");
            target.style.marginLeft = m + 'px';
            m++;
            
        }
    }
}
function Stop(){
    clearInterval(x);    
}

function reset(){
    clearInterval(x);
    m = 0;
    var target = document.getElementById("img");
    target.style.marginLeft = m;
}
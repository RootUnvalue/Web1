document.getElementById("btn").onmouseover = ev_mouseover;
document.getElementById("btn").onmouseout = ev_mouseout;
document.getElementById("btn").onclick = ev_click;
document.getElementById("btn").ondblclick = ev_dbclick;

function ev_mouseover(){
    document.getElementById("txt").innerText = "현재 상태: mouseover";
}

function ev_mouseout(){
    document.getElementById("txt").innerText = "현재 상태: mouseout";
}

function ev_dbclick(){
    document.getElementById("txt").innerText = "현재 상태: dbclick";
}

function ev_click(){
    document.getElementById("txt").innerText = "현재 상태: click";
}
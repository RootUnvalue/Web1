var imgs = document.getElementsByTagName("img");
var imgsf;
var ls = window.localStorage;

function pload(){
    document.getElementById("display").innerHTML = "<p>파일 이름:" + ls.getItem("f_name") + "</p>";
    backgroundst.backgroundImage = 'url(' + ls.getItem("f_addr") + ')';
    backgroundst.backgroundRepeat = 'no-repeat';
    backgroundst.backgroundPosition = 'center';
    backgroundst.backgroundSize = 'auto';
}

imgs[0].ondragstart = function (e) {
    e.dataTransfer.setData("text", e.target.id);
    imgsf = '"../week12/src/봇치.webp"';
}

imgs[1].ondragstart = function (e) {
    e.dataTransfer.setData("text", e.target.id);
    imgsf = '"../week12/src/니지카.webp"';
}

imgs[2].ondragstart = function (e) {
    e.dataTransfer.setData("text", e.target.id);
    imgsf = '"../week12/src/료.webp"';
}

imgs[3].ondragstart = function (e) {
    e.dataTransfer.setData("text", e.target.id);
    imgsf = '"../week12/src/키타.webp"';
}

var dropfield = document.getElementById("dropfield");

dropfield.ondragover = function (e) {
    e.preventDefault();
    e.target.style.background = 'gray';
}
var backgroundst = document.getElementById("dropfield").style;

dropfield.ondrop = function (e){
    e.preventDefault();
    e.target.style.background = 'transparent';

    var file_name = e.dataTransfer.getData("text");

    ls.setItem("f_addr", imgsf);
    ls.setItem("f_name", file_name);
    
    document.getElementById("display").innerHTML = "<p>파일 이름:" + file_name + "</p>";
    backgroundst.backgroundImage = 'url(' + imgsf + ')';
    backgroundst.backgroundRepeat = 'no-repeat';
    backgroundst.backgroundPosition = 'center';
    backgroundst.backgroundSize = 'auto';

}
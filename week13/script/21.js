var imgs = document.getElementsByTagName("img");
var imgsf;

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

var dropfeild = document.getElementById("dropfeild");

dropfeild.ondragover = function (e) {
    e.preventDefault();
    e.target.style.background = 'gray';
}
var backgroundst = document.getElementById("dropfeild").style;

dropfeild.ondrop = function (e){
    e.preventDefault();
    e.target.style.background = 'transparent';

    var file_name = e.dataTransfer.getData("text");
    backgroundst.backgroundImage = 'url(' + imgsf + ')';
    backgroundst.backgroundRepeat = 'no-repeat';
    backgroundst.backgroundPosition = 'center';
    backgroundst.backgroundSize = 'auto';

}




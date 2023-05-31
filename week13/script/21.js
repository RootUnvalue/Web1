var imgs = document.getElementsByTagName("img");

imgs[0].ondragstart = function (e) {
    e.dataTransfer.setData("text", e.target.id);
}

imgs[1].ondragstart = function (e) {
    e.dataTransfer.setData("text", e.target.id);
}

imgs[2].ondragstart = function (e) {
    e.dataTransfer.setData("text", e.target.id);
}

imgs[3].ondragstart = function (e) {
    e.dataTransfer.setData("text", e.target.id);
}

var dropfeild = document.getElementById("dropfeild");

dropfeild.ondragover = function (e) {
    e.preventDefault();
    e.target.style.background = 'gray';
}

dropfeild.ondrop = function (e){
    e.preventDefault();
    e.target.style.background = 'transparent';

    var file_name = e.dataTransfer.getData("text");
    document.getElementById("name").innerText = "파일 이름 : " + file_name;
}




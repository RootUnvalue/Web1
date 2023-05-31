var imgs = document.getElementsByTagName("img");

// document.getElementById("test").innerText = document.getElementById("c1").checked;

function animation(){
    if(document.getElementById("c1").checked == true){
        setTimeout(visible, 500, 0);
    }
    if(document.getElementById("c2").checked == true){
        setTimeout(visible, 1000, 1);
    }
    if(document.getElementById("c3").checked == true){
        setTimeout(visible, 1500, 2);
    }
    if(document.getElementById("c4").checked == true){
        setTimeout(visible, 2000, 3);
    }
    
    // for(i=0; i<imgs.length; i++){
    //     setTimeout(visible, 1000, i);
    //     document.getElementById("test").innerText = "상태: " +i;
    // }
}

function visible(n){
    if (imgs[n].style.visibility == "visible") {
        imgs[n].style.visibility = "hidden";
    } else {
        imgs[n].style.visibility = "visible";
    }
}
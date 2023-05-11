var inputs = document.getElementsByTagName("input");
for(i=0; i<inputs.length; i++){
    inputs[i].onclick = remove_self;
}

function remove_self(event){
    btn = event.target;
    document.getElementById("button_area").removeChild(btn);
}
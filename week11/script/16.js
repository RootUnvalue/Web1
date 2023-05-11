var inputs = document.getElementsByTagName("input");
for(i=0; i<inputs.length; i++){
    inputs[i].onclick = plus;
}

function plus(event){
    btn = event.target;
    now = btn.value;
    btn.value = (parseInt(now) + 1);
}
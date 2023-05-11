for(i=1; i<=2; i++){
    btn = document.createElement("input");
    btn.type = "button";
    btn.value = "자바스크립트에 의해서 동적으로 생성 및 삽입 되었음("+ i +")";
    document.getElementById("button_area").appendChild(btn);
}
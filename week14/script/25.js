window.onload = function(){
    var myVideo = document.getElementById("myvideo"),
    playBtn = document.getElementById("playbtn"),
    volumeCtrl = document.getElementById("volctrl"),
    timeDiv = document.getElementById("time");

    myVideo.addEventListener("timeupdate", updateTime);
    playBtn.addEventListener("click", play);
    volumeCtrl.addEventListener("change", updateVolume);
        
    function updateTime(){
        timeDiv.innerHTML = Math.floor(myVideo.currentTime) + "/" + Math.floor(myVideo.duration) + "(초)";
        pr = document.getElementById("playpr");
        now = Math.floor(myVideo.currentTime) / Math.floor(myVideo.duration);
        if(now < 0.1){
            pr.value = 0;
        }else if(now<0.2){
            pr.value = 1;
        }else if(now<0.3){
            pr.value = 2;
        }else if(now<0.4){
            pr.value = 3;
        }else if(now<0.5){
            pr.value = 4;
        }else if(now<0.6){
            pr.value = 5;
        }else if(now<0.7){
            pr.value = 6;
        }else if(now<0.8){
            pr.value = 7;
        }else if(now<0.9){
            pr.value = 8;
        }else{
            pr.value = 9;
        }
    }

    function play(){
        if(myVideo.paused){
            playBtn.innerHTML = "일시정지";
            myVideo.currentTime = document.getElementById("playby").value;
            myVideo.play();
        }else{
            playBtn.innerHTML = "재생";
            myVideo.pause();
        }
    }

    function updateVolume() {
        myVideo.volume = volumeCtrl.value;
    }
}
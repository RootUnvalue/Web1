function getMyLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(myCallback);
    } else {
        alert("Geolocation 이 지원되지 않는 기기입니다.");
    }
}

var tLat = 37.5459582;
var tLon = 126.9625;
var result;

function myCallback(myPosition){
    var nLat = myPosition.coords.latitude;
    var nLon = myPosition.coords.longitude;

    document.getElementById("display").innerHTML = "위치 정보 : 위도 : " + nLat + "경도 : " + nLon;
    calculateDistance(tLat, tLon, nLat, nLon);
    document.getElementById("display2").innerText = "거리 : " + result + "km";
}




function calculateDistance(lat1, lon1, lat2, lon2){
    var R = 6321;
    var dLat = (lat2 - lat1).toRad();
    var dLon = (lon2 - lon1).toRad();
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
    + Math.cos(lat1.toRad()) * Math.cos(lat2.toRad())
    * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var b = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    result = R * b;
}

Number.prototype.toRad = function() {
    return this * Math.PI / 180;
}
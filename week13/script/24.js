var mapContainer = document.getElementById("map");
var nLat, nLon, mapOption, map;

if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(myCallback);
} else {
    alert("Geolocation 이 지원되지 않는 기기입니다.");
}

function myCallback(myPosition){
    nLat = myPosition.coords.latitude;
    nLon = myPosition.coords.longitude;
    document.getElementById("display").innerHTML = "위치 정보 : 위도 : " + nLat + "경도 : " + nLon;
    mapOption = {
        center: new kakao.maps.LatLng(nLat, nLon),
        level: 5,
    };
    map = new kakao.maps.Map(mapContainer, mapOption);
}

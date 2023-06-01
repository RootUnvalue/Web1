var mapContainer = document.getElementById("map");
var nLat, nLon, mapOption, map, mapTypeControl, zoomControl, marker;

if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(myCallback);
} else {
    alert("Geolocation 이 지원되지 않는 기기입니다.");
}

function myCallback(myPosition){
    nLat = myPosition.coords.latitude;
    nLon = myPosition.coords.longitude;
    document.getElementById("display").innerHTML = "위치 정보 : 위도 : " + nLat + "경도 : " + nLon;

    mapContainer = document.getElementById("map");
    mapOption = {
        center: new kakao.maps.LatLng(nLat, nLon),
        level: 4,
        mapTypeId: kakao.maps.MapTypeId.ROADMAP
    };

    map = new kakao.maps.Map(mapContainer, mapOption);

    mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(nLat, nLon),
        draggable: true,
        map: map
    });
    addEvents();
}

function addEvents(){
    kakao.maps.event.addListener(map, 'click', function (mouseEvent){
        console.log("지도에서 클릭한 위치의 좌표는 " + mouseEvent.latLng.toString() +" 입니다.");
        document.getElementById("display").innerHTML += "<br>지도에서 클릭한 위치의 좌표: " + mouseEvent.latLng.toString();
    })

    // kakao.maps.event.addListener(map, 'center_changed', function (){
    //     console.log("지도의 중심 좌표가 변함");
    //     document.getElementById("display").innerHTML += "<br>지도의 중심 좌표가 변함";
    // })

    kakao.maps.event.addListener(map, 'dragstart', function(){
        console.log("드래그 시작됨");
        document.getElementById("display").innerHTML += "<br>지도 내에서 드래그가 시작됨";
    })

    kakao.maps.event.addListener(map, 'dragend', function(){
        console.log("드래그 끝남");
        document.getElementById("display").innerHTML += "<br>지도 내에서 드래그가 종료됨";
    })
}
//set map
function initialize() {
    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(-23.55248487492323, -51.462090248729005),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        minZoom: 2
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var infoWindow = new google.maps.InfoWindow();
     var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-23.55248487492323, -51.462090248729005),
        map: map,
        title: 'Apucarana, Parana'
     });
     marker.addListener('click', function(){
            infoWindow.setContent(marker.title);
            infoWindow.open(map, marker);
     });
     google.maps.event.addDomListener(window, "resize", function(){
        map.setCenter(mapOptions.center);
     });
}
google.maps.event.addDomListener(window, 'load', initialize);
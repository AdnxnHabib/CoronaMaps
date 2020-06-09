var map;

function initialize(){
    var mapOptions = {
        zoom: 10, center: {lat:44.660560, lng:-79.522947} 
    };
    var map = new google.maps.map(document.getElementById('map'), mapOptions);


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
        initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(initialLocation);
        });
    }

}

initialize();


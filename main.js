var map;

var input; // input from search bar

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

function initMap() {
    // Create the initial Map
      var middle = {lat:43.660560, lng:-79.522947};
      var map = new google.maps.Map(
          document.getElementById('map'), {zoom: 10, center: middle});
        
          // Center the map based on client's location
          if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function (position) {
     initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
     map.setCenter(initialLocation);
 });
}
    }


    input = document.getElementById("search").value;
    console.log(input);
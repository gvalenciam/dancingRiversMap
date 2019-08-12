//<editor-fold desc="VARIABLES">

/**
 * @param drone_flights_JSON: JSON variable thtat contains the information about the drone flights videos showed in the web
 * @param droneFlightsMarkersArray: Drone map markers array
 * @param droneFlightsMarkersPositionsArray: Lat Lon array of drone markers
 * @param previous_drone_marker_coordinates: Values used to validate if drone video card should be dismissed or not
 */
var drone_flights_JSON = [

    {
        "title": "Río Huallaga - Chontayacu",
        "location": "Uchiza",
        "latitude": -8.405576,
        "longitude": -76.37996,
        "code": "DJI_0145.MOV",
        "thumbnail_image": "img/bottom-cards-images/card_1.JPG"

    },
    {
        "title": "Río Huallaga",
        "location": "Tingo María",
        "latitude": -9.286076,
        "longitude": -75.9998,
        "code": "DJI_0107.MOV",
        "thumbnail_image": "img/bottom-cards-images/card_1.JPG"
    }

];

var droneFlightsMarkersArray = [];
var droneFlightsMarkersPositionsArray = [];
var previous_drone_marker_coordinates = {lat: -180, lng: -180};

//</editor-fold>

//<editor-fold desc="FUNCTIONS">

/**
 * Starts animation when the drone marker is clicked
 * @param event
 */
function droneVideoAnimationClickCallback(event) {

    document.getElementById('drone-animation-video').playbackRate = 2.5;
    document.getElementById("drone-animation-video").src = "videos/drone_animation_videos/" + event.feature.getProperty("video_code");

    document.getElementById("drone-animation-video").oncanplay = function () {

        if(!drone_video_animation_playing){
            drone_video_animation_playing = true;
            fadeInElements(["drone-video-animation-click-container"], 350);
            //offsetCenter(new google.maps.LatLng(droneVideoAnimations[1].Coordinates[0].lat, droneVideoAnimations[1].Coordinates[0].lng), 16);
            droneVideoPathAnimation(droneVideoAnimations[1], "#FF0000", 0.0, 2.0);
        }

    };

}

/**
 * Adds drone marker to the map using the JSON object defined in the variables section
 */
function addDroneMarker() {

    for (var i = 0; i < drone_flights_JSON.length; i++){

        var json = drone_flights_JSON[i];

        var marker = new google.maps.Marker({
            position: {lat: drone_flights_JSON[i].latitude, lng: drone_flights_JSON[i].longitude},
            map: map,
            icon: "img/side-bar-icon/drone_marker_icon.png",
        });

        droneFlightsMarkersArray.push(marker);
        droneFlightsMarkersPositionsArray.push(marker.getPosition());

        (function (marker, i, json, previous_drone_marker_coordinates) {

            google.maps.event.addListener(marker, 'click', function (e) {

                offsetCenter(marker.getPosition(), 10);
                document.getElementById("drone-flights-marker-click-container").addEventListener("click", function () {
                    document.getElementById("droneVideoOverlay").style.visibility = "visible";
                });
                document.getElementById("card-1-marker-row-1-title").innerHTML = json.title;
                document.getElementById("card-1-marker-row-1-location").innerHTML = json.location;
                document.getElementById("card-1-row-1-video").src = "videos/drone_flights/" + json.code;
                document.getElementById("drone-video-source").src = "videos/drone_flights/" + json.code;

                setTimeout(function () {
                    document.getElementById("card-1-marker-row-1").style.visibility = "visible";
                    fadeInElements(["drone-flights-marker-click-container"], 350);
                }, 1000);

            });

        })(marker, i, json, previous_drone_marker_coordinates);

    }

    var coordsArray = coordinatesArrayCenter(droneFlightsMarkersPositionsArray);
    map.setZoom(7);
    map.panTo(new google.maps.LatLng(coordsArray.centerX, coordsArray.centerY));

}

//</editor-fold>
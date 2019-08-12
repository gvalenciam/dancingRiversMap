//<editor-fold desc="VARIABLES">

/**
 * @param map: Google maps object
 * @param peruBounds: Limit bounds for span and zoom
 * @param initial_zoom: Zoom level when the map shows at start
 * @param initial_center: Inital location to zoom the map to
 * @param rivers_center_zoom_level: Zoom level for each river when selected
 */

var map;
var centroids = [];
var peruBounds = {north: 0.404, south: -18.9, west: -82.4, east: -68.0};
var initial_zoom = 5.8;
var min_zoom = 5.8;
var max_zoom = 15;
var initial_center = {lat: -9.348230, lng: -74.869015};

var rivers_center_coordinates = [

    {lat: -3.798189026111893, lng: -71.81820930597723}, //Amazonas
    {lat: -5.585791759355741, lng: -75.89849260498927}, //Huallaga
    {lat: -4.745834731451211, lng: -75.95129328144554}, //Marañon
    {lat: -7.0769861698921055, lng: -74.41859653177255} //Ucayali

];

var rivers_center_zoom_level = [
    8, //Amazonas
    9, //Huallaga
    8, //Marañon
    8  //Ucayali
];

//</editor-fold>

//<editor-fold desc="FUNCTIONS">

/**
 * Adds water level markers to the map including marker image and interaction callbacks
 * @param JSON_path
 * @param river_data_layer
 * @param markerIconImagePath
 * @param clickCallback
 * @param mouseoverCallback
 * @param mouseoutCallback
 * @param featuresArray
 */

function addWaterLevelMarkersGeoJSON(JSON_path, river_data_layer, markerIconImagePath, clickCallback, mouseoverCallback, mouseoutCallback, featuresArray) {

    var waterLevelDropdownOptionTemplate = document.getElementsByTagName("template")[17];

    var dropdownWaterlevelOptions = document.getElementById("dropdownWaterlevelOptions");

    $.getJSON(JSON_path, function (json) {

        river_data_layer.addGeoJson(json);

        if(featuresArray.length <= 0){

            var i = 0;
            river_data_layer.forEach(function (feature) {

                var waterLevelDropdownOptionTemplateContent = waterLevelDropdownOptionTemplate.content.cloneNode(true);
                waterLevelDropdownOptionTemplateContent.querySelector(".dropdown-item").name = i.toString();
                waterLevelDropdownOptionTemplateContent.querySelector(".dropdown-item").innerHTML = feature.getProperty("Lugar");
                dropdownWaterlevelOptions.appendChild(waterLevelDropdownOptionTemplateContent);
                featuresArray.push(feature);
                i++;
            });

            river_data_layer.setStyle(function(feature) {
                return {
                    icon: markerIconImagePath,
                    title: feature.getProperty("Lugar")
                }
            });

        }

        $('#dropdownMenuButtonWaterlevel + [aria-labelledby="dropdownMenuButtonWaterlevel"] button').on('click', function (e) {

            e.preventDefault();
            offsetCenter(new google.maps.LatLng(water_level_markers[parseInt(this.name)].getProperty("Latitud"), water_level_markers[parseInt(this.name)].getProperty("Longitud")), 12);

            if (activeRiverIndex === 0) document.getElementById("water-level-card-image").src = "img/Water-levels/Amazonas/" + water_level_markers[parseInt(this.name)].getProperty("Lugar") + ".png";
            if (activeRiverIndex === 1) document.getElementById("water-level-card-image").src = "img/Water-levels/Huallaga/" + water_level_markers[parseInt(this.name)].getProperty("Lugar") + ".png";
            if (activeRiverIndex === 2) document.getElementById("water-level-card-image").src = "img/Water-levels/Marañon/" + water_level_markers[parseInt(this.name)].getProperty("Lugar") + ".png";
            if (activeRiverIndex === 3) document.getElementById("water-level-card-image").src = "img/Water-levels/Ucayali/" + water_level_markers[parseInt(this.name)].getProperty("Lugar") + ".png";

            document.getElementById("dropdownMenuButtonWaterlevel").innerHTML = water_level_markers[parseInt(this.name)].getProperty("Lugar");
            document.getElementById("water-level-card-location").innerHTML = water_level_markers[parseInt(this.name)].getProperty("Lugar");

        });

        river_data_layer.addListener('click', function(event) {
            if(clickCallback !== null) clickCallback(event);
        });

        river_data_layer.addListener("mouseover", function (event) {
            if(mouseoverCallback !== null) mouseoverCallback(event);
        });

        river_data_layer.addListener("mouseout", function (event) {
            if(mouseoutCallback !== null) mouseoutCallback(event);
        });

        river_data_layer.setMap(map);

    });

}

/**
 * Takes a marker array and remove each element from the map
 * @param markersArray
 */
function removeMarkersFromMap(markersArray) {

    markersArray.forEach(function (marker) {
        marker.setMap(null);
    });

}

/**
 * Add UHd markers to the map
 * @param filePath
 * @param markerImagePath
 * @param markersArray
 * @param markersPositionArray
 * @param markerClickFunction
 */
function addUHDMarkers(filePath, markerImagePath, markersArray, markersPositionArray, markerClickFunction) {

    $.getJSON(filePath, function (json) {

        for (var i = 0; i < json.features.length; i++){

            var marker = new google.maps.Marker({
                position: {lat: json.features[i].geometry.coordinates[1], lng: json.features[i].geometry.coordinates[0]},
                map: map,
                icon: markerImagePath,
            });

            markersArray.push(marker);
            markersPositionArray.push(marker.getPosition());

            (function (marker, i, json) {

                google.maps.event.addListener(marker, 'click', function (e) {

                    UHDMarkerIndexTop = UHDHuallagaMarkers.indexOf(marker) + 1;

                    markerClickFunction(json.features);

                    offsetCenter(marker.getPosition(), 12);
                    marker.setIcon("img/marker-icons/rojo.png");
                    geocodeLatLng(marker.getPosition(), "top");
                    // document.getElementById("UHD-top-card-image").src = "img/cross_sections_images/huallaga/Section " + (i + 1) +".png";
                    document.getElementById("UHD-top-card-image").src = "img/cross_sections_images/huallaga/" + json.features[i].properties.id + ".png";
                    // document.getElementById("dropdownMenuButtonTop").setAttribute("data-i18n", 'dropdown-UHD-section-item-' + UHDMarkerIndexTop.toString());
                    //document.getElementById("dropdownMenuButtonTop").setAttribute("data-i18n", 'dropdown-UHD-section-item');
                    document.getElementById("dropdownMenuButtonTop").innerHTML = $.i18n('dropdown-UHD-section-item', UHDMarkerIndexTop.toString());

                });

            })(marker, i, json);

        }

        var coordsArray = coordinatesArrayCenter(markersPositionArray);
        map.setZoom(10);
        map.panTo(new google.maps.LatLng(coordsArray.centerX, coordsArray.centerY));

    })

}

/**
 * Returns the center of a group of coordinates in an array
 * @param coordinatesArray
 * @returns {{centerX: number, centerY: number}}
 */
function coordinatesArrayCenter(coordinatesArray) {

    var sumLat = 0;
    var sumLng = 0;

    for (var t = 0; t < coordinatesArray.length; t++){

        sumLat += coordinatesArray[t].lat();
        sumLng += coordinatesArray[t].lng();

    }

    return {centerX: sumLat/coordinatesArray.length, centerY: sumLng/coordinatesArray.length}

}

/**
 * Pan the map to a location with an offset to the left side (marker, line, feature pans to the left side)
 * @param latlng
 * @param zoom
 */
function offsetCenter(latlng, zoom) {

    var offsetx = -$(window).width()/4;

    var scale = Math.pow(2, zoom);

    var worldCoordinateCenter = map.getProjection().fromLatLngToPoint(latlng);
    var pixelOffset = new google.maps.Point((offsetx/scale) || 0, 0);

    var worldCoordinateNewCenter = new google.maps.Point(
        worldCoordinateCenter.x - pixelOffset.x,
        worldCoordinateCenter.y + pixelOffset.y
    );

    var newCenter = map.getProjection().fromPointToLatLng(worldCoordinateNewCenter);

    map.setZoom(zoom);
    map.panTo(newCenter);

}

/**
 * Uses the geocoding tool from google to get a location string from a lat lon coordinate
 * @param coordinate
 * @param container
 */
function geocodeLatLng(coordinate, container) {

    var geocoder = new google.maps.Geocoder;

    geocoder.geocode({'location': coordinate}, function(results, status) {

        if (status === 'OK') {

            if (results[0]) {

                if(container === "top"){
                    document.getElementById("UHD-marker-top-card-location").innerHTML = results[0].formatted_address;
                }else if(container === "bottom"){
                    document.getElementById("UHD-marker-bottom-card-location").innerHTML = results[0].formatted_address;
                }

            } else {
                window.alert('No results found');
            }

        } else {
            window.alert('Geocoder failed due to: ' + status);
        }

    });
}

/**
 * Add general marker to the map. Callback interaction functions can be defined by the user and passed as parameters
 * @param JSON_path
 * @param river_data_layer
 * @param markerIconImagePath
 * @param clickCallback
 * @param mouseoverCallback
 * @param mouseoutCallback
 * @param featuresArray
 */
function addMarkersGeoJSON(JSON_path, river_data_layer, markerIconImagePath, clickCallback, mouseoverCallback, mouseoutCallback, featuresArray) {

    $.getJSON(JSON_path, function (json) {

        river_data_layer.addGeoJson(json);
        river_data_layer.setStyle(function(feature) {
            return {
                icon: markerIconImagePath,
                title: feature.getProperty("Lugar")
            }
        });

        river_data_layer.addListener('click', function(event) {
            if(clickCallback !== null) clickCallback(event);
        });

        river_data_layer.addListener("mouseover", function (event) {
            if(mouseoverCallback !== null) mouseoverCallback(event);
        });

        river_data_layer.addListener("mouseout", function (event) {
            if(mouseoutCallback !== null) mouseoutCallback(event);
        });

        if(featuresArray.length <= 0){
            river_data_layer.forEach(function (feature) {
                featuresArray.push(feature);
            });
        }

        river_data_layer.setMap(map);

    });

}

/**
 * Marker mouseover callback function
 * @param event
 */
function markerMouseoverCallback(event) {
    document.getElementById("bottom-left-coordinates-lat").innerHTML = $.i18n('coordinates-hover-container-latitude') + ": " + parseFloat(event.feature.getProperty("Latitud").toFixed(4)) + "°";
    document.getElementById("bottom-left-coordinates-lng").innerHTML = $.i18n('coordinates-hover-container-longitude') + ": " + parseFloat(event.feature.getProperty("Longitud").toFixed(4)) + "°";
    fadeInElements(["map-bottom-left-container"], 350);
}

/**
 * Marker mouseout callback function
 * @param event
 */
function markerMouseoutCallback(event) {
    fadeOutElements(["map-bottom-left-container"], 350);
}

//</editor-fold>
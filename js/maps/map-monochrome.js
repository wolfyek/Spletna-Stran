// ------------------------------------------------
// Project Name: Ramio Coming Soon Template
// Project Description: Ramio - awesome coming soon template to kick-start your project
// Tags: Ramio, coming soon, under construction, template, coming soon page, html5, css3
// Version: 2.0.0
// Build Date: April 2018
// Last Update: September 2021
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: http://mixdesign.club
// File name: map-monochrome.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Google Map Parameters
//  2. Google Map Custom Marker Icon
//  3. Style Of The Map
//  4. Google Map Options
//  5. Inizialize The Map
//  6. Custom Marker
//  7. Custom zoom-in/zoom-out Buttons
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------


$(function() {
  // Insert Your Google Map Parameters
  var latitude = 40.761425,
    longitude = -73.977643,
    map_zoom = 14;

  // Google Map Custom Marker Icon
  var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
  var marker_url = ( is_internetExplorer11 ) ? 'img/location/location-monochrome.png' : 'img/location/location-monochrome.svg';

    var main_color = '#160c37',
      saturation_value= 1,
      brightness_value= 5;

      // Style Of The Map
      var style= [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.business",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "poi.place_of_worship",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.school",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.sports_complex",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#5487a4"
            },
            {
              "weight": 2
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#fcfaf8"
            }
          ]
        }
      ];

      // Google Map Options
      var map_options = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: map_zoom,
            gestureHandling: 'cooperative',
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: style,
        }

      // Inizialize The Map
      var map = new google.maps.Map(document.getElementById('google-container'), map_options);

      // Custom Marker
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(latitude, longitude),
          map: map,
          visible: true,
        icon: marker_url,
      });

      // Custom zoom-in/zoom-out Buttons
      function CustomZoomControl(controlDiv, map) {

          var controlUIzoomIn= document.getElementById('zoom-in'),
            controlUIzoomOut= document.getElementById('zoom-out');
          controlDiv.appendChild(controlUIzoomIn);
          controlDiv.appendChild(controlUIzoomOut);

        google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
            map.setZoom(map.getZoom()+1)
        });
        google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
            map.setZoom(map.getZoom()-1)
        });
      }

      var zoomControlDiv = document.createElement('div');
      var zoomControl = new CustomZoomControl(zoomControlDiv, map);

        map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(zoomControlDiv);

});

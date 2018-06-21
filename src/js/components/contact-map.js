/* ============================================================
 * Components: Contact map (Google Maps API)
 * ============================================================
 *
 * It shows a set of libraries and general functions that will
 * give us usefulness when using them in conjunction with after functions.
 *
 */


// ============================================================
// Initialized map

var google, marker;

function contactMap() {
  var mapElement = document.getElementById('contact-map');
  if(mapElement) {
    if (window.google && google.maps) {
      // Map script is already loaded
      console.log('Map script is already loaded. Initialising');
      contactMap__init();
    } else {
      console.log('Loading Google map...');
      contactMap__load();
    }  
  }
}

function getScript(source, callback) {
    var script = document.createElement('script');
    var prior = document.getElementsByTagName('script')[0];
    script.async = 1;

    script.onload = script.onreadystatechange = function( _, isAbort ) {
        if(isAbort || !script.readyState || /loaded|complete/.test(script.readyState) ) {
            script.onload = script.onreadystatechange = null;
            script = undefined;

            if(!isAbort) { if(callback) callback(); }
        }
    };

    script.src = source;
    prior.parentNode.insertBefore(script, prior);
}

function contactMap__load() {
  var contactMapAPIKey = 'AIzaSyDOYHNJiZGNSjfHONGd6z7XhPnQ3jNw5CQ';
  getScript('https://maps.google.com/maps/api/js?key=' + contactMapAPIKey + '&v=3.31&libraries=places,geometry', contactMap__init);
}


function contactMap__init() {
  var mapElement = document.getElementById('contact-map');

  var mapCustomType = new google.maps.StyledMapType(
      [{"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#e9e9e9"}, {"lightness": 17 } ] }, {"featureType": "landscape", "elementType": "geometry", "stylers": [{"color": "#f5f5f5"}, {"lightness": 20 } ] }, {"featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{"color": "#ffffff"}, {"lightness": 17 } ] }, {"featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{"color": "#ffffff"}, {"lightness": 29 }, {"weight": 0.2 } ] }, {"featureType": "road.arterial", "elementType": "geometry", "stylers": [{"color": "#ffffff"}, {"lightness": 18 } ] }, {"featureType": "road.local", "elementType": "geometry", "stylers": [{"color": "#ffffff"}, {"lightness": 16 } ] }, {"featureType": "poi", "elementType": "geometry", "stylers": [{"color": "#f5f5f5"}, {"lightness": 21 } ] }, {"featureType": "poi.park", "elementType": "geometry", "stylers": [{"color": "#dedede"}, {"lightness": 21 } ] }, {"elementType": "labels.text.stroke", "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"lightness": 16 } ] }, {"elementType": "labels.text.fill", "stylers": [{"saturation": 36 }, {"color": "#333333"}, {"lightness": 40 } ] }, {"elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "geometry", "stylers": [{"color": "#f2f2f2"}, {"lightness": 19 } ] }, {"featureType": "administrative", "elementType": "geometry.fill", "stylers": [{"color": "#fefefe"}, {"lightness": 20 } ] }, {"featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{"color": "#fefefe"}, {"lightness": 17 }, {"weight": 1.2 } ] } ],
      { name: 'Óptica Ferao' } );

  var mapCustomTypeId = 'Óptica Ferao'; 

  // Coordenates
  var mapCenter__lat = 37.986918;
  var mapCenter__lng = -1.128019;

  var mapCenter =  {lat: mapCenter__lat, lng: mapCenter__lng};
  var mapMark =  mapCenter;

  var mapIcon = HOST_TEMPLATE + 'assets/images/contact-map-marker.png';

  setTimeout(function() {

    var map = new google.maps.Map(mapElement, {
      zoom: 17,
      center: mapCenter,
      disableDefaultUI: true,
      streetViewControl: false,
      scrollwheel: false,
      panControl: false,
      mapTypeControl: false,
      overviewMapControl: true,
      zoomControl: true,
      backgroundColor: '#f7f7f7',
      zoomControl: false,
      scaleControl: false,
      //draggable: !("ontouchend" in document),
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, mapCustomTypeId]
      }
    });

    map.mapTypes.set(mapCustomTypeId, mapCustomType);
    map.setMapTypeId(mapCustomTypeId);

    window.setTimeout(function() {
      marker = new google.maps.Marker({
        icon: mapIcon,
        map: map,
        position: mapMark,
        draggable:false
      });
        
      marker.addListener('click', function() {
        map.setZoom(17);
        map.setCenter(mapCenter);
      });
    }, 1000);

  }, 400);  
}

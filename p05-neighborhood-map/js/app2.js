"use strict";

var initialCafes = [{
        name: "Cafe EL.AN",
        address: "Werdertorgasse 4, 1010 Wien",
        url: "www.cafe-elan.at",
        lat: 48.214744,
        lng: 16.369889,
        icon: "img/ic_local_cafe_white_24px.svg"
    },
    {
        name: "HEUER am Karlsplatz",
        address: "Treitlstr. 2, 1040 Wien",
        url: "www.heuer-amkarlsplatz.com",
        lat: 48.199986,
        lng: 16.368140,
        icon: "img/ic_local_cafe_white_24px.svg"
    },
    {
        name: "Unger und Klein",
        address: "Gölsdorfgasse 2, 1010 Wien",
        url: "www.ungerundklein.at",
        lat: 48.209093,
        lng: 16.366606,
        icon: "img/ic_local_cafe_white_24px.svg"
    },
    {
        name: "Cafe Schönbergers",
        address: "Wiedner Hauptstraße 40, 1040 Wien",
        url: "www.schoenbergers.at",
        lat: 48.19398,
        lng: 16.366905,
        icon: "img/ic_local_cafe_white_24px.svg"
    },

    {
        name: "Brass Monkey",
        address: "Gumpendorfer Str. 71, 1060 Wien",
        url: "brassmonkeyvienna.com",
        lat: 48.194904,
        lng: 16.350911,
        icon: "img/ic_local_cafe_white_24px.svg"
    },
    {
        name: "Gretel",
        address: "Mariahilfer Str. 92, 1070 Wien",
        url: "www.gretel.wien",
        lat: 48.197195,
        lng: 16.345636,
        icon: "img/ic_local_cafe_white_24px.svg"
    },

    {
        name: "POC People on Caffeine",
        address: "Schlösselgasse 21, 1080 Wien",
        url: "facebook.com/poccafe",
        lat: 48.214607,
        lng: 16.352946,
        icon: "img/ic_local_cafe_white_24px.svg"
    },
    {
        name: "Cafe Jonas Reindl",
        address: "Währinger Str. 2-4, 1090 Wien",
        url: "www.jonasreindl.at",
        lat: 48.215004,
        lng: 16.361923,
        icon: "img/ic_local_cafe_white_24px.svg"
    },

    {
        name: "Espresso Hobby",
        address: "Währinger Str. 9, 1090 Wien",
        url: "www.espressohobby.at",
        lat: 48.217014,
        lng: 16.359146,
        icon: "img/ic_local_cafe_white_24px.svg"
    },
    {
        name: "Coffee Pirates",
        address: "Spitalgasse 17, 1090 Wien",
        url: "coffeepirates.at",
        lat: 48.217336,
        lng: 16.351071,
        icon: "img/ic_local_cafe_white_24px.svg"
    },

    {
        name: "Cafe Ritter",
        address: "Ottakringer Str. 117, 1160 Wien",
        url: "www.caferitterottakring.at",
        lat: 48.213277,
        lng: 16.319492,
        icon: "img/ic_local_cafe_white_24px.svg"
    },
    {
        name: "Lucullus",
        address: "Neulinggasse 29, 1030 Wien",
        url: "www.lucullus-catering.at",
        lat: 48.199054,
        lng: 16.384768,
        icon: "img/ic_local_cafe_white_24px.svg"
    },

    {
        name: "Joseph Brot",
        address: "Landstraßer Hauptstraße 4, 1030 Wien",
        url: "www.joseph.co.at",
        lat: 48.205441,
        lng: 16.386123,
        icon: "img/ic_local_cafe_white_24px.svg"
    },
    {
        name: "Tian Bistro – im Kunsthaus",
        address: "Weißgerberlände 14, 1030 Wien",
        url: "www.tian-bistro.com",
        lat: 48.211295,
        lng: 16.393558,
        icon: "img/ic_local_cafe_white_24px.svg"
    }
];

// Constructor for Cafe-objects.
var Cafe = function(initialCafes) {
    //this.name = ko.observable(data.name);
    this.name = initialCafes.name;
    this.url  = initialCafes.url;
    this.lat  = initialCafes.lat;
    this.lng  = initialCafes.lng;
    this.icon = initialCafes.icon;
    /*
    this.address = ko.observable(data.address);
    this.url = ko.observable(data.url);
    this.lat = ko.observable(data.lat);
    this.lng = ko.observable(data.lng);
    this.icon = ko.observable(data.icon);
    */
    //this.infoString = ko.observable(data.info);
    //this.marker = ko.observable(data.marker);  <-- don't need to be observable
};


// Global variables
var map, infowindow, marker;
var markers = [];

function initMap() {
    var styles = [{
            elementType: 'geometry',
            stylers: [{
                color: '#242f3e'
            }]
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#242f3e'
            }]
        },
        {
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#746855'
            }]
        },
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
            }]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
            }]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{
                color: '#263c3f'
            }]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#6b9a76'
            }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{
                color: '#38414e'
            }]
        },
        {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#212a37'
            }]
        },
        {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#9ca5b3'
            }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{
                color: '#746855'
            }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#1f2835'
            }]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#f3d19c'
            }]
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{
                color: '#2f3948'
            }]
        },
        {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
            }]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{
                color: '#17263c'
            }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#515c6d'
            }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#17263c'
            }]
        }
    ];

    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(48.210182, 16.344125), // shows the city center of Vienna, Austria
        zoom: 13,
        styles: styles,
    });
    ko.applyBindings(new ViewModel()); // Apply Bindings from the ViewModel
}

// Error function for googleMaps
function googleError() {
    alert("Google Maps could not be loaded. Press F5 to refresh.");
}



/***************  ViewModel ******************/
var ViewModel = function() {
    var self = this;
    self.cafeList = ko.observableArray([]);
    // Markers array.
    self.cafeMarker = ko.observableArray();
    // Track user input and apply filter.
    self.searchText = ko.observable();

    self.cafeInfo = ko.observable();

    initialCafes.forEach(function(cafeElem) {
        self.cafeList.push(new Cafe(cafeElem));
    });

    infowindow = new google.maps.InfoWindow();

    self.cafeList().forEach(function(cafeElem) {
        // Each cafe gets a marker object.
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(cafeElem.lat, cafeElem.lng),
            map: map,
            icon: cafeElem.icon,
            animation: google.maps.Animation.DROP
        });
        //Connect list with map markers.
        cafeElem.marker = marker;

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, this); // Shows InfoWindow of exactly this location.
            // center position on click
            map.panTo(cafeElem.marker.getPosition());
            // animate marker
            cafeElem.marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function() {
                cafeElem.marker.setAnimation(null);
            }, 1400); // x * 700 = the perfect bounce

            // create final variable for id and secret of foursquare
            var CLIENT_ID = "VTFF1SPJSVEH52C5HGVWP5JI2UGBZ5IGHCUYT05NECCCZY2I";
            var CLIENT_SECRET = "XC1QELGO312DRDWCM4HLQ3AQPU2UTE0TOKT1S4O4D4Y1E4ZY";

            // calculate current date to get YYYYMMDD for foursquare-version
            var getCurrentVersion = function(){
                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth();
                var day = date.getMonth();

                if(month < 10){
                    month = "0" + month;
                }
                if(day < 10){
                    day = "0" + day;
                }
                return year+month+day;
            };

            var currentVersion = getCurrentVersion();
            var foursquareUrl = 'https://api.foursquare.com/v2/venues/search?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&v=' + currentVersion + '&ll=' + cafeElem.lat  + ',' + cafeElem.lng + '&query=\'' + cafeElem.name + '\'&limit=1';


            $.getJSON(foursquareUrl, function(data){
              console.log("success");
            })
            .done(function(data) {
              var info = data.response.venues[0];

              //* If foursquare data is falsy, I use my own data here.
              info.name = info.name || cafeElem.name();
              info.location.address = info.location.address || cafeElem.address();
              info.url = info.url || cafeElem.url;//"No Url provided."

              var cafeInfo = '<h4>' + info.name + '</h4>' +
                             '<h5>' + info.location.address + '</h5>' +
                             '<a href="' + info.url + '">' + info.url + '</a>';

              var foursquareImgUrl = 'https://api.foursquare.com/v2/venues/' + data.response.venues[0].id + '/photos?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&v=' + currentVersion ;

              infowindow.setContent(cafeInfo);
              $.getJSON(foursquareImgUrl, function (data) {
                console.log("success2");
              })
                .fail(function(jqXHR, textStatus, errorThrown) {
                  alert(textStatus + ": Could not load all data! ");
                })
                .done(function(data){
                  var info = data.response.photos.items[0];
                  var width = 150;
                  var height = 150;
                  cafeInfo += '<p><img alt="picture" src="' + info.prefix + width + 'x' + height + info.suffix + '"></p>';
                  infowindow.setContent(cafeInfo);
                });
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
              alert(textStatus + ": Could not load all data! ");
            });

            //});

            var getFoursquareId = function() {
              $.getJSON(foursquareUrl, function(data) {
                var id = data.response.venues[0].id;
                return id;
              });
            };

            var foursquareId = getFoursquareId();
        });
    });

    self.getContent = function(cafeElem) {
        google.maps.event.trigger(cafeElem.marker, 'click');
    };

    // All markers pushed into cafeList array.
    self.cafeList().forEach(function(cafe) {
        self.cafeMarker.push(cafe);
    });

    // Filters locations depending on input in search field
    self.useFilter = function() {
        var searchInput = self.searchText().toLowerCase();
        self.cafeMarker.removeAll();
        self.cafeList().forEach(function(cafe) {
            // http://archive.renauddumont.be/post/2011/10/03/CRM-2011-Dynamically-show-or-hide-fields-using-javascript
            // Site explains setVisible function
            cafe.marker.setVisible(false);
            // Dynamic search.
            if (cafe.name.toLowerCase().indexOf(searchInput) >= 0) {
                self.cafeMarker.push(cafe);
            }
        });
        self.cafeMarker().forEach(function(cafe) {
            cafe.marker.setVisible(true);
        });
    };
};

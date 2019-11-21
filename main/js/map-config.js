// Custom JS code Start From Here
$(function () {
    "use strict";
    // Google Map 
    $(function () {
        new Maplace({
            styles: {
                'Night': [{
                    featureType: 'all',
                    stylers: [{
                        invert_lightness: 'true'
                    }]
                }],
                'Greyscale': [{
                    featureType: 'all',
                    stylers: [{
                            saturation: -100
                        },
                        {
                            gamma: 0.50
                        }
                    ]
                }]
            },
            locations: [{
                lat: 40.785091,
                lon: -73.968285,
                zoom: 8
            }]
        }).Load();
    });

});
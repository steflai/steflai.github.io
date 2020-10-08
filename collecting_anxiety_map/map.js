var map_6b545e102afe4ea1b3a26f3ad4be79ef = L.map(
    "map_6b545e102afe4ea1b3a26f3ad4be79ef",
    {
        center: [22.452161, 148.323658],
        crs: L.CRS.EPSG3857,
        maxBounds: [[-90, -180], [90, 180]],
        zoom: 2,
        zoomControl: true,
        preferCanvas: false,
    }
);





var tile_layer_767bf2b7519645f7900389d03c4ed584 = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {"attribution": "Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 50, "maxZoom": 50, "minZoom": 1.5, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
).addTo(map_6b545e102afe4ea1b3a26f3ad4be79ef);


var tile_layer_383b8044ced248f9a03c17d0656b0d47 = L.tileLayer(
    "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg",
    {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
).addTo(map_6b545e102afe4ea1b3a26f3ad4be79ef);


var marker_fdad2b26db30430f9125718ae7143364 = L.marker(
    [40.650002, -73.949997],
    {}
).addTo(map_6b545e102afe4ea1b3a26f3ad4be79ef);


var icon_a77655e29c4b4d3eadbc5642125fdc72 = L.AwesomeMarkers.icon(
    {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "lightgray", "prefix": "glyphicon"}
);
marker_fdad2b26db30430f9125718ae7143364.setIcon(icon_a77655e29c4b4d3eadbc5642125fdc72);


var marker_06ca7e889d9046ea8639357fedf0a110 = L.marker(
    [51.509865, -0.118092],
    {}
).addTo(map_6b545e102afe4ea1b3a26f3ad4be79ef);


var icon_2e15253db2cd4b62b0994d195a8bc86f = L.AwesomeMarkers.icon(
    {"extraClasses": "fa-rotate-0", "icon": "cloud", "iconColor": "white", "markerColor": "lightgray", "prefix": "glyphicon"}
);
marker_06ca7e889d9046ea8639357fedf0a110.setIcon(icon_2e15253db2cd4b62b0994d195a8bc86f);


var marker_068a944fefb24c0789e5c6b8c4572ed0 = L.marker(
    [42.281319, -83.7454603],
    {}
).addTo(map_6b545e102afe4ea1b3a26f3ad4be79ef);


var icon_d7ac2ed27b1b47b89080d6820eddd680 = L.AwesomeMarkers.icon(
    {"extraClasses": "fa-rotate-0", "icon": "road", "iconColor": "white", "markerColor": "lightgray", "prefix": "glyphicon"}
);
marker_068a944fefb24c0789e5c6b8c4572ed0.setIcon(icon_d7ac2ed27b1b47b89080d6820eddd680);


var marker_844af5cc0fbe41098dcd44a7c43772d2 = L.marker(
    [22.28552, 114.15769],
    {}
).addTo(map_6b545e102afe4ea1b3a26f3ad4be79ef);


var icon_c261b3534fb14bc0806d751e27e902b1 = L.AwesomeMarkers.icon(
    {"extraClasses": "fa-rotate-0", "icon": "film", "iconColor": "white", "markerColor": "lightgray", "prefix": "glyphicon"}
);
marker_844af5cc0fbe41098dcd44a7c43772d2.setIcon(icon_c261b3534fb14bc0806d751e27e902b1);


var poly_line_b73131f941c046f885d191ba4bae454c = L.polyline(
    [[42.281319, -83.7454603], [40.650002, -73.949997], [51.509865, -0.118092], [22.28552, 114.15769]],
    {"bubblingMouseEvents": true, "color": "limegreen", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "limegreen", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1, "smoothFactor": 1.0, "stroke": true, "weight": 1.5}
).addTo(map_6b545e102afe4ea1b3a26f3ad4be79ef);

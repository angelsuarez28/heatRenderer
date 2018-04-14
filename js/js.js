var miMapa;
require(["esri/map",
"esri/geometry/Point",
"esri/layers/FeatureLayer",
"esri/renderers/HeatmapRenderer",
"dojo/domReady!"], function(Map,
  Point,
  FeatureLayer,
  HeatmapRenderer) {




  var miCentro = new Point (-101.26,28.464);


  var obj = {
    "basemap": "dark-gray",
    "center" : miCentro,
    "zoom": 3

  }



var url = "http://services.arcgis.com/BG6nSlhZSAWtExvp/arcgis/rest/services/MajorCities_WebMercator/FeatureServer/0";
miMapa = new Map("mapaCont", obj);
var Capa2 = new FeatureLayer(url, {showLabels: true, outFields: ["POPULATION"]});





var heatmapRenderer = new HeatmapRenderer({
    colors: ["rgba(0, 0, 255, 0)","rgb(0, 0, 255)","rgb(255, 0, 255)", "rgb(255, 0, 0)"],
    blurRadius: 8,
    field : "POPULATION",
    maxPixelIntensity: 10000000,
    minPixelIntensity: 50000
});







  Capa2.setRenderer(heatmapRenderer);

    miMapa.addLayer(Capa2);



});

import Map from './node_modules/ol/Map.js';
import OSM from './node_modules/ol/source/OSM.js';
import TileLayer from './node_modules/ol/layer/Tile.js';
import View from './node_modules/ol/View.js';

var waterLayer = new ol.layer.Tile({
  source: new ol.source.XYZ({
    url: 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
    attributions: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
  }),
  style: function(feature, resolution) {
    var waterColor = 'rgb(255,165,0)'; // Orange color
    return new ol.style.Style({
      fill: new ol.style.Fill({
        color: waterColor
      }),
      stroke: new ol.style.Stroke({
        color: waterColor,
        width: 2
      })
    });
  }
});

var map = new ol.Map({
  layers: [
    waterLayer
  ],
  target: 'map',
  view: new ol.View({
    center: ol.proj.fromLonLat([0, 0]),
    zoom: 2
  })
});


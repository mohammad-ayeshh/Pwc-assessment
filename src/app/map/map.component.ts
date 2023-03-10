import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { environment } from 'src/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit  {
  map!: mapboxgl.Map;
  city!:string;

  accessToken:string="pk.eyJ1IjoibW9oYW1tYWQtYXllc2giLCJhIjoiY2xjZWx4eHo4NzhwbjNwa2VnaXBsOWlweiJ9.SiTucTeZYrzSa8EpGu-h7A"

constructor(){
  
  
}
  ngOnInit(): void {
    
    this.map = new mapboxgl.Map({
      container: 'map',
      accessToken:environment.mapbox.accessToken ,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [37, 31],
      zoom: 6.5
    });
    
    this.map.addControl(new mapboxgl.NavigationControl());
  }

search(){

  debugger
//var searchButton = document.getElementById('search-button');

  // Use the Mapbox Geocoding API to search for the city
  var geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + this.city + '.json?access_token=' + this.accessToken;
  fetch(geocodeURL)
    .then(function(response) {
      return response.json();
    })
    .then((data) => {
      var lng = data.features[0].center[0];
      var lat = data.features[0].center[1];
      // Center the map on the search result
      this.map.setCenter([lng, lat]);
      // Add a marker to the map
      new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(this.map);
    });
}




  }

 
  

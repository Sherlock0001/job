import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
declare var google;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterContentInit{ 
  map;
  marker;
  @ViewChild('mapElement', {static: true}) mapElement;
  title = 'job';
  catalogue = [
		{nomCatalogue : "bissaap"},
		{nomCatalogue : "bouye"},
		{nomCatalogue : "ditakh"},
		{nomCatalogue : "dakhaar"},
		{nomCatalogue : "orange"},
		{nomCatalogue : "bissaap"},
		{nomCatalogue : "bouye"},
		{nomCatalogue : "ditakh"},
		{nomCatalogue : "dakhaar"},
		{nomCatalogue : "orange"},
		{nomCatalogue : "dakhaar"},
		{nomCatalogue : "orange"},
		{nomCatalogue : "bissaap"},
		{nomCatalogue : "bouye"},
		{nomCatalogue : "ditakh"},
		{nomCatalogue : "dakhaar"},
		{nomCatalogue : "orange"}
	];

zones = [
		{adresse : "Parcelles"},
		{adresse : "Plateau"},
		{adresse : "Amitie"},
		{adresse : "Guediawaye"},
		{adresse : "Pikine"},
		{adresse : "Parcelles"},
		{adresse : "Plateau"},
		{adresse : "Amitie"},
		{adresse : "Guediawaye"},
		{adresse : "Pikine"},
		{adresse : "Parcelles"},
		{adresse : "Plateau"},
		{adresse : "Amitie"},
		{adresse : "Guediawaye"},
		{adresse : "Pikine"},
		{adresse : "Parcelles"},
		{adresse : "Plateau"},
		{adresse : "Amitie"},
		{adresse : "Guediawaye"},
		{adresse : "Pikine"}
	];
	 
	connected = true;
	disconnected = false;

    ngAfterContentInit() :void {
      this.map = new google.maps.Map(
        this.mapElement.nativeElement,
            {
              center: {lat: -34.397, lng: 150.644},
              zoom: 8
            }
        );
      this.marker = new google.maps.Marker(
            {
              position: {lat: -34.397, lng: 150.644},
              map: this.map
            }
        );
    }

	constructor() { }
}

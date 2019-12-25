import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
declare var google;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, AfterContentInit{ 
  map;
  marker;
  @ViewChild('mapElement', {static: true}) mapElement;
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  	this.createContactForm();
  }
  createContactForm(){
    this.contactForm = this.formBuilder.group({
      fullname: [''], 
      subject: [''],  
      email: [''],
      message: ['']
    });
  }

  ngOnInit() {
  }

   ngAfterContentInit() :void {
      this.map = new google.maps.Map(
        this.mapElement.nativeElement,
            {
              center: {lat: -34.397, lng: 150.644},
              zoom: 10
            }
        );
      this.marker = new google.maps.Marker(
            {
              position: {lat: -34.397, lng: 150.644},
              map: this.map
            }
        );
    }

  onSubmit() {
      console.log('Your form data : ', this.contactForm.value);
 	}
}

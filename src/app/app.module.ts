import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { RechercheComponent } from './pages/recherche/recherche.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DetailServiceComponent } from './pages/recherche/detail-service/detail-service.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    RechercheComponent,
    ContactsComponent,
    DetailServiceComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
	

}

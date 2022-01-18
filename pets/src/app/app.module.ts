import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SearchFormComponent } from './shared/components/search-form/search-form.component';
import { PetCardComponent } from './pets/pet-card/pet-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchFormComponent,
    PetCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

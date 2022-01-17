import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { WineListComponent } from './wine/wine-list/wine-list.component';
import { WineDetailsComponent } from './wine/wine-details/wine-details.component';
import { SearchFormComponentComponent } from './shared/components/search-form-component/search-form-component.component';
import { TableComponentComponent } from './shared/components/table-component/table-component.component';
import { PaginationComponentComponent } from './shared/components/pagination-component/pagination-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    WineListComponent,
    WineDetailsComponent,
    SearchFormComponentComponent,
    TableComponentComponent,
    PaginationComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { FormsModule } from '@angular/forms';


import { SpinnerOverlayComponent } from './spinner/spinner-overlay/spinner-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    
    
    SpinnerOverlayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

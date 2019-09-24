import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FloorMapComponent } from '../components/floor-map/floor-map.component';
import { ClientComponent } from '../components/client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    FloorMapComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { SwiperDirective } from '';

// Step 1: Add the following line...
// import { register } from 'swiper/element/bundle';
import { AppRoutingModule } from './app.routes';

// Step 2: Add the following line...
// register();

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
  schemas: [
    // CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
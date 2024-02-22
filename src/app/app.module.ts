import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgxDaterangepickerBootstrapModule, NgxDaterangepickerLocaleService } from 'ngx-daterangepicker-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxDaterangepickerBootstrapModule.forRoot({
      separator: ' - ',
      applyLabel: 'Okay',
    })
  ],
  providers: [
    NgxDaterangepickerLocaleService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CSRGenerateComponent } from './Components/csr-generate/csr-generate.component';
import { CSREnrollmentComponent } from './Components/csr-enrollment/csr-enrollment.component';

@NgModule({
  declarations: [
    AppComponent,
    CSRGenerateComponent,
    CSREnrollmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    QrScannerComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxScannerQrcodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

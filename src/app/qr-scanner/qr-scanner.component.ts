import { Component, ViewChild } from '@angular/core';
import { 
  NgxScannerQrcodeComponent,
  ScannerQRCodeResult } 
from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.css']
})
export class QrScannerComponent {
  @ViewChild('action', { static: true, read: NgxScannerQrcodeComponent }) action: NgxScannerQrcodeComponent | undefined;
  
  ngOnInit(): void {
    this.action?.start()
  }

  public onEvent(e: ScannerQRCodeResult[], action?: any): void {
    // e?.length && action && action.pause(); // Detect once and pause scan!
    console.log(e[0].value);
    alert(e[0].value)
  }

}

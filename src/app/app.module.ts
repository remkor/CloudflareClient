import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule, MatFormFieldModule, MatSelectModule, MatTableModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CredentialsInterceptor } from './interceptors/credentials.interceptor';
import { DeleteDnsRecordsButtonComponent } from './components/delete-dns-records-button/delete-dns-records-button.component';
import { DnsRecordTableComponent } from './components/dns-record-table/dns-record-table.component';
import { ZoneSelectComponent } from './components/zone-select/zone-select.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteDnsRecordsButtonComponent,
    DnsRecordTableComponent,
    ZoneSelectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    AppRoutingModule
  ],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

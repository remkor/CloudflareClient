import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, map } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

import { DNSRecord } from "../models/dns-record.model";
import { Zone } from '../models/zone.model';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  apiUrl: string = 'https://api.cloudflare.com/client/v4/zones';

  authEmail: string = 'AUTH_EMAIL';
  authKey: string = 'AUTH_KEY';

  constructor(private httpClient: HttpClient) {
    console.debug('ZoneService::ZoneService()');
  }

  public deleteDNSRecord(zoneId: string, dnsRecordId: string): Observable<string> {
    console.debug('ZoneService::deleteDNSRecord()');

    return this.httpClient.delete(`${this.apiUrl}/${zoneId}/dns_records/${dnsRecordId}`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Email': this.authEmail,
        'X-Auth-Key': this.authKey
      },
      responseType: 'json'
    }).pipe(
      map(this.processId),
      catchError(this.handleError)
    );
  }

  public listDNSRecords(id: string): Observable<DNSRecord[]> {
    console.debug('ZoneService::listDNSRecords()');

    return this.httpClient.get(`${this.apiUrl}/${id}/dns_records`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Email': this.authEmail,
        'X-Auth-Key': this.authKey
      },
      responseType: 'json'
    }).pipe(
      map(this.processDNSRecords),
      catchError(this.handleError)
    );
  }

  public listZones(): Observable<Zone[]> {
    console.debug('ZoneService::listZones()');

    return this.httpClient.get(this.apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Email': this.authEmail,
        'X-Auth-Key': this.authKey
      },
      responseType: 'json'
    }).pipe(
      map(this.processZones),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.debug('ZoneService::handleError()');
    return throwError(error);
  }

  private processDNSRecords(res: Response) {
    console.debug('ZoneService::processDNSRecords()');

    console.debug(res);
    let result = res['result']

    return <DNSRecord[]>result;
  }

  private processId(res: Response) {
    console.debug('ZoneService::processId()');

    console.debug(res);
    let result = res['result'];

    return <string>result['id'];
  }

  private processZones(res: Response) {
    console.debug('ZoneService::processZones()');

    console.debug(res);
    let result = res['result']

    return <Zone[]>result;
  }

}

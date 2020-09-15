import { DNSRecord } from '../models/dns-record.model';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DnsRecordsService {

  dnsRecords: DNSRecord[] = [];

  @Output() refresh: EventEmitter<DNSRecord[]> = new EventEmitter();

  toggle(dnsRecords: DNSRecord[]) {
    this.dnsRecords = dnsRecords;
    this.refresh.emit(this.dnsRecords);
  }

}

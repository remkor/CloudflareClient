import { Component, OnInit } from '@angular/core';
import { DNSRecord } from 'src/app/models/dns-record.model';
import { DnsRecordsService } from 'src/app/services/dns-records.service';

@Component({
  selector: 'app-dns-record-table',
  templateUrl: './dns-record-table.component.html',
  styleUrls: ['./dns-record-table.component.scss']
})
export class DnsRecordTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];

  dnsRecords: DNSRecord[] = [];

  constructor(private dnsRecordsService: DnsRecordsService) { }

  ngOnInit() {
    this.dnsRecordsService.refresh.subscribe(dnsRecords => {
      this.dnsRecords = dnsRecords;
    });
  }

}

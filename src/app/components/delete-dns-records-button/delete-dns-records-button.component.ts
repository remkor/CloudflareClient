import { Component, OnInit } from '@angular/core';
import { DNSRecord } from 'src/app/models/dns-record.model';
import { DnsRecordsService } from 'src/app/services/dns-records.service';
import { ZoneService } from '../../services/zone.service';

@Component({
  selector: 'app-delete-dns-records-button',
  templateUrl: './delete-dns-records-button.component.html',
  styleUrls: ['./delete-dns-records-button.component.scss']
})
export class DeleteDnsRecordsButtonComponent implements OnInit {

  dnsRecords: DNSRecord[] = [];

  constructor(
    private dnsRecordsService: DnsRecordsService,
    private zoneService: ZoneService
  ) { }

  ngOnInit() {
    this.dnsRecordsService.refresh.subscribe(dnsRecords => {
      this.dnsRecords = dnsRecords;
    });
  }

  onClick() {
    let self = this;
    this.dnsRecords.forEach(function(dnsRecord) {
      self.zoneService.deleteDNSRecord(dnsRecord['zone_id'], dnsRecord['id']).subscribe((res) => {
        console.debug(res);
      });
    }); 
  }

}

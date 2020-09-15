import { Component, OnInit } from '@angular/core';
import { DnsRecordsService } from 'src/app/services/dns-records.service';
import { Zone } from '../../models/zone.model';
import { ZoneService } from '../../services/zone.service';

@Component({
  selector: 'app-zone-select',
  templateUrl: './zone-select.component.html',
  styleUrls: ['./zone-select.component.scss']
})
export class ZoneSelectComponent implements OnInit {

  constructor(
    private dnsRecordsService: DnsRecordsService,
    private zoneService: ZoneService
  ) { }

  ngOnInit() {
    this.zoneService.listZones().subscribe((res) => {
      console.debug(res);
      this.zones = res;
    });
  }

  selectionChange(event) {
    let id = event['value'];
    this.zoneService.listDNSRecords(id).subscribe((res) => {
      console.debug(res);
      this.dnsRecordsService.toggle(res);
    });
  }

  zones: Zone[] = [];

}

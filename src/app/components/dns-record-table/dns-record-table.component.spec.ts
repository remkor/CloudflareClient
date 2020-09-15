import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnsRecordTableComponent } from './dns-record-table.component';

describe('DnsRecordTableComponent', () => {
  let component: DnsRecordTableComponent;
  let fixture: ComponentFixture<DnsRecordTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnsRecordTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnsRecordTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

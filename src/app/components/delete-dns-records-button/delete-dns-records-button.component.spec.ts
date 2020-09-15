import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDnsRecordsButtonComponent } from './delete-dns-records-button.component';

describe('DeleteDnsRecordsButtonComponent', () => {
  let component: DeleteDnsRecordsButtonComponent;
  let fixture: ComponentFixture<DeleteDnsRecordsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDnsRecordsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDnsRecordsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

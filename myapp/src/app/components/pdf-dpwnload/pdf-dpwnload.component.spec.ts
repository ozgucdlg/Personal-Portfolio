import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfDpwnloadComponent } from './pdf-dpwnload.component';

describe('PdfDpwnloadComponent', () => {
  let component: PdfDpwnloadComponent;
  let fixture: ComponentFixture<PdfDpwnloadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfDpwnloadComponent]
    });
    fixture = TestBed.createComponent(PdfDpwnloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

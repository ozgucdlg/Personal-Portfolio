import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingComponent } from './typing.component';

describe('TypingComponent', () => {
  let component: TypingComponent;
  let fixture: ComponentFixture<TypingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypingComponent]
    });
    fixture = TestBed.createComponent(TypingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

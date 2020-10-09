import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferamountComponent } from './transferamount.component';

describe('TransferamountComponent', () => {
  let component: TransferamountComponent;
  let fixture: ComponentFixture<TransferamountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferamountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

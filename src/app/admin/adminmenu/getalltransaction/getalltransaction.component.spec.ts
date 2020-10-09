import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalltransactionComponent } from './getalltransaction.component';

describe('GetalltransactionComponent', () => {
  let component: GetalltransactionComponent;
  let fixture: ComponentFixture<GetalltransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetalltransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetalltransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

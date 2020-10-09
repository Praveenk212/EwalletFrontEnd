import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcustomeraccountComponent } from './newcustomeraccount.component';

describe('NewcustomeraccountComponent', () => {
  let component: NewcustomeraccountComponent;
  let fixture: ComponentFixture<NewcustomeraccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcustomeraccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcustomeraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

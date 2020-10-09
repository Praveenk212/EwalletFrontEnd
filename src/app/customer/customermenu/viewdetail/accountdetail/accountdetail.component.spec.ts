import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountdetailComponent } from './accountdetail.component';

describe('AccountdetailComponent', () => {
  let component: AccountdetailComponent;
  let fixture: ComponentFixture<AccountdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

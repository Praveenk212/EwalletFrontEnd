import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetaccountstoapproveComponent } from './getaccountstoapprove.component';

describe('GetaccountstoapproveComponent', () => {
  let component: GetaccountstoapproveComponent;
  let fixture: ComponentFixture<GetaccountstoapproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetaccountstoapproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetaccountstoapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

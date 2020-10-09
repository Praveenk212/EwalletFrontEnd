import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomermenuComponent } from './customermenu.component';

describe('CustomermenuComponent', () => {
  let component: CustomermenuComponent;
  let fixture: ComponentFixture<CustomermenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomermenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

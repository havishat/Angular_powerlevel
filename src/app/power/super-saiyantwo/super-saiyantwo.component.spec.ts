import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyantwoComponent } from './super-saiyantwo.component';

describe('SuperSaiyantwoComponent', () => {
  let component: SuperSaiyantwoComponent;
  let fixture: ComponentFixture<SuperSaiyantwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyantwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyantwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

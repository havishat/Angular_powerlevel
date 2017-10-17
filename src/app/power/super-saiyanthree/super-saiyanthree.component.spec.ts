import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanthreeComponent } from './super-saiyanthree.component';

describe('SuperSaiyanthreeComponent', () => {
  let component: SuperSaiyanthreeComponent;
  let fixture: ComponentFixture<SuperSaiyanthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

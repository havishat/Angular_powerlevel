import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanfourComponent } from './super-saiyanfour.component';

describe('SuperSaiyanfourComponent', () => {
  let component: SuperSaiyanfourComponent;
  let fixture: ComponentFixture<SuperSaiyanfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

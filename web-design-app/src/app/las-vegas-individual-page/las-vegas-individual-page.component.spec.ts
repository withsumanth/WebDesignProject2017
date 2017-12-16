import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LasVegasIndividualPageComponent } from './las-vegas-individual-page.component';

describe('LasVegasIndividualPageComponent', () => {
  let component: LasVegasIndividualPageComponent;
  let fixture: ComponentFixture<LasVegasIndividualPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LasVegasIndividualPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LasVegasIndividualPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

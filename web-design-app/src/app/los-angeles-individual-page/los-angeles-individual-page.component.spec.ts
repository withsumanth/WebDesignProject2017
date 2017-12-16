import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LosAngelesIndividualPageComponent } from './los-angeles-individual-page.component';

describe('LosAngelesIndividualPageComponent', () => {
  let component: LosAngelesIndividualPageComponent;
  let fixture: ComponentFixture<LosAngelesIndividualPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LosAngelesIndividualPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LosAngelesIndividualPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

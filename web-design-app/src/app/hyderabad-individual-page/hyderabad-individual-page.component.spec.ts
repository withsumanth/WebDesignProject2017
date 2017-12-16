import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyderabadIndividualPageComponent } from './hyderabad-individual-page.component';

describe('HyderabadIndividualPageComponent', () => {
  let component: HyderabadIndividualPageComponent;
  let fixture: ComponentFixture<HyderabadIndividualPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyderabadIndividualPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyderabadIndividualPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

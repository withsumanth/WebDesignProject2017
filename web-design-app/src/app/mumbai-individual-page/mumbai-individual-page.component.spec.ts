import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MumbaiIndividualPageComponent } from './mumbai-individual-page.component';

describe('MumbaiIndividualPageComponent', () => {
  let component: MumbaiIndividualPageComponent;
  let fixture: ComponentFixture<MumbaiIndividualPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MumbaiIndividualPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MumbaiIndividualPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

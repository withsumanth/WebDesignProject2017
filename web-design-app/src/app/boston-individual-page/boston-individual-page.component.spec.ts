import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BostonIndividualPageComponent } from './boston-individual-page.component';

describe('BostonIndividualPageComponent', () => {
  let component: BostonIndividualPageComponent;
  let fixture: ComponentFixture<BostonIndividualPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BostonIndividualPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BostonIndividualPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

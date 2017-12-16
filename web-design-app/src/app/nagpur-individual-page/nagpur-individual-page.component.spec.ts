import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NagpurIndividualPageComponent } from './nagpur-individual-page.component';

describe('NagpurIndividualPageComponent', () => {
  let component: NagpurIndividualPageComponent;
  let fixture: ComponentFixture<NagpurIndividualPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NagpurIndividualPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NagpurIndividualPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

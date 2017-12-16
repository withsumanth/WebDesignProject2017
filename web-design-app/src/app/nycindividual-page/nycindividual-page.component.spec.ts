import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NycindividualPageComponent } from './nycindividual-page.component';

describe('NycindividualPageComponent', () => {
  let component: NycindividualPageComponent;
  let fixture: ComponentFixture<NycindividualPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NycindividualPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NycindividualPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

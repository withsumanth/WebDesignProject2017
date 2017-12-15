import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBangaloreComponent } from './about-bangalore.component';

describe('AboutBangaloreComponent', () => {
  let component: AboutBangaloreComponent;
  let fixture: ComponentFixture<AboutBangaloreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutBangaloreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBangaloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

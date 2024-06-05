import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFoundryComponent } from './about-foundry.component';

describe('AboutFoundryComponent', () => {
  let component: AboutFoundryComponent;
  let fixture: ComponentFixture<AboutFoundryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutFoundryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFoundryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

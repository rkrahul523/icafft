import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIILComponent } from './about-iil.component';

describe('AboutIILComponent', () => {
  let component: AboutIILComponent;
  let fixture: ComponentFixture<AboutIILComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutIILComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutIILComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

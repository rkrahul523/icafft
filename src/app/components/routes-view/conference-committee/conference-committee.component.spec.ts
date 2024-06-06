import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceCommitteeComponent } from './conference-committee.component';

describe('ConferenceCommitteeComponent', () => {
  let component: ConferenceCommitteeComponent;
  let fixture: ComponentFixture<ConferenceCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferenceCommitteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamificationDetailComponent } from './gamification-detail.component';

describe('GamificationDetailComponent', () => {
  let component: GamificationDetailComponent;
  let fixture: ComponentFixture<GamificationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamificationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

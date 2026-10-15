import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoalBanner } from './goal-banner';

describe('GoalBanner', () => {
  let component: GoalBanner;
  let fixture: ComponentFixture<GoalBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(GoalBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

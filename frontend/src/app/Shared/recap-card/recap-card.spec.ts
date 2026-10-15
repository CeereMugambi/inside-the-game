import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecapCard } from './recap-card';

describe('RecapCard', () => {
  let component: RecapCard;
  let fixture: ComponentFixture<RecapCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecapCard],
    }).compileComponents();

    fixture = TestBed.createComponent(RecapCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

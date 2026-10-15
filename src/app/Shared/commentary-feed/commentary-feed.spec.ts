import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentaryFeed } from './commentary-feed';

describe('CommentaryFeed', () => {
  let component: CommentaryFeed;
  let fixture: ComponentFixture<CommentaryFeed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentaryFeed],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentaryFeed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

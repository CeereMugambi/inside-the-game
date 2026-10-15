import { Component, effect, ElementRef, inject, input } from '@angular/core';
import { isHighlightedEvent } from '../models/event-display';
import { MatchEvent } from '../models/match';
import { EventCard } from '../event-card/event-card';

@Component({
  imports: [EventCard],
  selector: 'app-timeline',
  styleUrl: './timeline.css',
  templateUrl: './timeline.html',
})
export class Timeline {
  matchEvents = input.required<MatchEvent[]>();
  shouldFollowLatest = input(false);

  isHighlightedEvent = isHighlightedEvent;

  private hostElementReference = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    effect(() => {
      const visibleEventCount = this.matchEvents().length;
      if (!this.shouldFollowLatest() || visibleEventCount === 0) {
        return;
      }
      requestAnimationFrame(() => this.scrollToLatestEvent());
    });
  }

  private scrollToLatestEvent() {
    const timelineItems = this.hostElementReference.nativeElement.querySelectorAll('.timeline-item');
    const latestTimelineItem = timelineItems[timelineItems.length - 1];
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    latestTimelineItem?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'center',
    });
  }
}


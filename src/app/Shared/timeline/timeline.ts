import { Component, input } from '@angular/core';
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

  isHighlightedEvent = isHighlightedEvent;
}

